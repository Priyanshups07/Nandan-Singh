import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

/* ── Helpers ── */
const STEPS = [
  'Select Date',
  'Choose Time',
  'Consultation Type',
  'Personal Details',
  'Review',
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const MORNING_SLOTS = ['09:00 AM', '10:30 AM', '11:45 AM'];
const AFTERNOON_SLOTS = ['02:00 PM', '03:30 PM', '05:00 PM'];

// Simulated pre-booked dates (month-day pairs relative to current month)
// These represent dates already taken by other clients
function getBookedDates(year: number, month: number): number[] {
  // Deterministic "booked" dates based on month so they feel realistic
  const booked: Record<string, number[]> = {};
  // Generate some booked dates for current + next 3 months
  const now = new Date();
  for (let offset = 0; offset <= 3; offset++) {
    const d = new Date(now.getFullYear(), now.getMonth() + offset, 1);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    // 2-3 dates per month are booked
    const base = d.getMonth() % 5;
    booked[key] = [base + 3, base + 10, base + 18].filter(
      (day) => day <= new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
    );
  }
  const key = `${year}-${month}`;
  return booked[key] || [];
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const Booking: React.FC = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const [step, setStep] = useState(1);
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [consultType, setConsultType] = useState('Virtual Session');
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);
  const today = now.getDate();
  const isCurrentMonth = year === now.getFullYear() && month === now.getMonth();
  const bookedDates = getBookedDates(year, month);

  // Max navigable month = current + 3 months
  const maxDate = new Date(now.getFullYear(), now.getMonth() + 3, 1);
  const canGoPrev = !(year === now.getFullYear() && month === now.getMonth());
  const canGoNext = year < maxDate.getFullYear() || (year === maxDate.getFullYear() && month < maxDate.getMonth());

  const prevMonth = () => {
    if (!canGoPrev) return;
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
    setSelectedDate(null);
  };
  const nextMonth = () => {
    if (!canGoNext) return;
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
    setSelectedDate(null);
  };

  const goTo = (s: number) => {
    setStep(s);
    if (window.innerWidth < 1024) {
      document.getElementById('booking-canvas')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Validate form before going to Review step
  const validateAndGoReview = () => {
    if (!form.name.trim()) { setFormError('Please enter your full name.'); return; }
    if (!form.email.trim() || !form.email.includes('@')) { setFormError('Please enter a valid email address.'); return; }
    if (!form.phone.trim()) { setFormError('Please enter your mobile number.'); return; }
    setFormError('');
    goTo(5);
  };

  const formatDate = () => {
    if (!selectedDate) return '';
    return `${MONTHS[month]} ${String(selectedDate).padStart(2, '0')}, ${year}`;
  };

  const submitBooking = async () => {
    setIsSubmitting(true);
    const bookingDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
    
    const { error } = await supabase.from('bookings').insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        booking_date: bookingDateStr,
        booking_time: selectedTime,
        consult_type: consultType,
      }
    ]);

    setIsSubmitting(false);

    if (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to confirm booking. Please try again.');
    } else {
      goTo(6);
    }
  };

  return (
    <main className="max-w-container-max mx-auto px-8 pt-32 pb-section-padding-desktop">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* ── LEFT PANEL ── */}
        <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32">
          <div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-brand-black mb-4 leading-tight">
              Book Your Session
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Elevate your performance through strategic coaching tailored for modern leadership.
            </p>
          </div>

          {/* Progress Indicator — Vertical Stepper */}
          <div className="space-y-0 ml-1">
            {STEPS.map((label, i) => {
              const stepNum = i + 1;
              const isCompleted = stepNum < step;
              const isActive = stepNum === step;
              const isLast = i === STEPS.length - 1;
              return (
                <div key={label} className="flex gap-4 group cursor-pointer" onClick={() => { if (isCompleted || isActive) goTo(stepNum); }}>
                  {/* Left: dot + connector line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                        isCompleted
                          ? 'bg-brand-black text-white scale-110'
                          : isActive
                          ? 'bg-brand-black text-white scale-125 shadow-xl shadow-brand-black/20 ring-2 ring-brand-green ring-offset-2'
                          : 'bg-surface-container-high text-on-surface-variant group-hover:bg-brand-black/10 group-hover:scale-105'
                      }`}
                    >
                      {isCompleted ? (
                        <span className="material-symbols-outlined text-lg">check</span>
                      ) : (
                        <span className="font-label-lg text-label-lg">{stepNum}</span>
                      )}
                    </div>
                    {!isLast && (
                      <div className={`w-0.5 flex-1 min-h-[32px] rounded-full transition-all duration-500 my-1 ${isCompleted ? 'bg-brand-black' : 'bg-outline-variant/40'}`} />
                    )}
                  </div>
                  {/* Right: label */}
                  <div className={`pt-2.5 ${isLast ? '' : 'pb-4'}`}>
                    <span className={`font-label-lg text-label-lg transition-colors duration-300 ${isActive ? 'text-brand-black font-bold' : isCompleted ? 'text-brand-black' : 'text-on-surface-variant group-hover:text-brand-black'}`}>
                      {label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coach Card */}
          <div className="p-6 glass-card rounded-3xl flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 overflow-hidden flex-shrink-0">
              <img
                src="/assets/img/nandan.jpg"
                alt="Nandan Kumar Singh"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-label-lg text-label-lg text-on-surface">Nandan Kumar Singh</p>
              <p className="font-caption text-caption text-on-surface-variant">High-Performance Expert</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL: BOOKING CANVAS ── */}
        <div
          id="booking-canvas"
          className="lg:col-span-8 bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-outline-variant min-h-[620px] relative overflow-hidden"
        >
          {/* Step 1: Date Picker */}
          {step === 1 && (
            <div className="step-transition">
              <h2 className="font-headline-lg text-headline-md text-brand-black mb-8">Select a Date</h2>
              <div className="mb-8 flex justify-between items-center">
                <p className="font-label-lg text-label-lg text-on-surface">
                  {MONTHS[month]} {year}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={prevMonth}
                    disabled={!canGoPrev}
                    className={`p-2.5 rounded-xl transition-colors duration-300 ${canGoPrev ? 'hover:bg-surface-container cursor-pointer' : 'opacity-30 cursor-not-allowed'}`}
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button
                    onClick={nextMonth}
                    disabled={!canGoNext}
                    className={`p-2.5 rounded-xl transition-colors duration-300 ${canGoNext ? 'hover:bg-surface-container cursor-pointer' : 'opacity-30 cursor-not-allowed'}`}
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 text-center font-label-lg text-label-lg text-on-surface-variant mb-4">
                {DAYS.map((d) => <div key={d} className="py-2">{d}</div>)}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="p-4 opacity-0" />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  // Past = today or earlier in current month
                  const isPast = isCurrentMonth && day <= today;
                  // Already booked by another client
                  const isBooked = bookedDates.includes(day);
                  const isDisabled = isPast || isBooked;
                  const isSelected = selectedDate === day;
                  return (
                    <button
                      key={day}
                      disabled={isDisabled}
                      onClick={() => setSelectedDate(day)}
                      className={`p-4 transition-all duration-500 rounded-2xl font-label-lg relative ${
                        isSelected
                          ? 'bg-brand-black text-white font-bold scale-125 shadow-xl shadow-brand-black/20 ring-2 ring-brand-green ring-offset-2'
                          : isPast
                          ? 'text-on-surface-variant opacity-20 cursor-not-allowed'
                          : isBooked
                          ? 'bg-red-50 text-red-300 cursor-not-allowed line-through'
                          : 'bg-surface-container-low text-on-surface hover:bg-brand-black hover:text-white hover:scale-110 hover:shadow-lg cursor-pointer'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex gap-6 mt-6 text-caption font-caption text-on-surface-variant">
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-surface-container-low border border-outline-variant inline-block" /> Available</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-red-50 inline-block" /> Booked</span>
                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-brand-black inline-block" /> Selected</span>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  disabled={!selectedDate}
                  onClick={() => goTo(2)}
                  className="bg-brand-black text-white px-10 py-4 font-label-lg text-label-lg rounded-xl hover:ring-2 hover:ring-brand-green hover:ring-offset-2 transition-all duration-500 active:scale-95 group flex items-center gap-2 disabled:opacity-40 disabled:hover:ring-0"
                >
                  Next: Select Time
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Time Slots */}
          {step === 2 && (
            <div className="step-transition">
              <h2 className="font-headline-lg text-headline-md text-brand-black mb-4">Available Time Slots</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-12">
                All times are shown in your local timezone (GMT+5:30).
              </p>
              <div className="space-y-10">
                <div>
                  <p className="font-label-lg text-label-lg text-brand-green mb-5 uppercase tracking-wider">Morning</p>
                  <div className="grid grid-cols-3 gap-4">
                    {MORNING_SLOTS.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-4 font-label-lg rounded-2xl transition-all duration-500 ${
                          selectedTime === t
                            ? 'border-2 border-brand-green bg-brand-green/5 font-bold text-brand-green'
                            : 'border border-outline-variant hover:border-brand-green/50 hover:bg-surface-container-low text-on-surface'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-brand-green mb-5 uppercase tracking-wider">Afternoon</p>
                  <div className="grid grid-cols-3 gap-4">
                    {AFTERNOON_SLOTS.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-4 font-label-lg rounded-2xl transition-all duration-500 ${
                          selectedTime === t
                            ? 'border-2 border-brand-green bg-brand-green/5 font-bold text-brand-green'
                            : 'border border-outline-variant hover:border-brand-green/50 hover:bg-surface-container-low text-on-surface'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-12 flex justify-between">
                <button onClick={() => goTo(1)} className="px-8 py-4 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">arrow_back</span> Back
                </button>
                <button
                  disabled={!selectedTime}
                  onClick={() => goTo(3)}
                  className="bg-brand-black text-white px-10 py-4 font-label-lg text-label-lg rounded-xl hover:ring-2 hover:ring-brand-green hover:ring-offset-2 transition-all duration-500 active:scale-95 group flex items-center gap-2 disabled:opacity-40 disabled:hover:ring-0"
                >
                  Next Step <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Consultation Type */}
          {step === 3 && (
            <div className="step-transition">
              <h2 className="font-headline-lg text-headline-md text-brand-black mb-8">Consultation Format</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <button
                  onClick={() => setConsultType('Virtual Session')}
                  className={`p-10 cursor-pointer transition-all duration-500 relative overflow-hidden group text-left rounded-3xl ${
                    consultType === 'Virtual Session'
                      ? 'border-2 border-brand-green bg-brand-green/5 shadow-xl'
                      : 'border border-outline-variant bg-white hover:border-brand-green/50 hover:shadow-lg'
                  }`}
                >
                  {consultType === 'Virtual Session' && (
                    <div className="absolute top-5 right-5 text-brand-green">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                  )}
                  <span className="material-symbols-outlined text-5xl mb-5 text-brand-green">videocam</span>
                  <h3 className="font-headline-md text-[24px] mb-3 text-brand-black">Virtual Session</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Global accessibility via secure Zoom or Google Meet links. Perfect for remote leaders.
                  </p>
                </button>
                <button
                  onClick={() => setConsultType('In-Person')}
                  className={`p-10 cursor-pointer transition-all duration-500 group text-left rounded-3xl ${
                    consultType === 'In-Person'
                      ? 'border-2 border-brand-green bg-brand-green/5 shadow-xl'
                      : 'border border-outline-variant bg-white hover:border-brand-green/50 hover:shadow-lg'
                  }`}
                >
                  {consultType === 'In-Person' && (
                    <div className="absolute top-5 right-5 text-brand-green">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                  )}
                  <span className="material-symbols-outlined text-5xl mb-5 text-on-surface-variant group-hover:text-brand-green transition-colors duration-300">person_pin_circle</span>
                  <h3 className="font-headline-md text-[24px] mb-3 text-brand-black">In-Person</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Face-to-face coaching at the Executive Hub in Raipur. Limited availability.
                  </p>
                </button>
              </div>
              <div className="mt-12 flex justify-between">
                <button onClick={() => goTo(2)} className="px-8 py-4 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">arrow_back</span> Back
                </button>
                <button onClick={() => goTo(4)} className="bg-brand-black text-white px-10 py-4 font-label-lg text-label-lg rounded-xl hover:ring-2 hover:ring-brand-green hover:ring-offset-2 transition-all duration-500 active:scale-95 group flex items-center gap-2">
                  Next Step <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Personal Info */}
          {step === 4 && (
            <div className="step-transition">
              <h2 className="font-headline-lg text-headline-md text-brand-black mb-8">Tell us about yourself</h2>
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setFormError(''); }}
                      placeholder="Full Name"
                      required
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green text-on-surface transition-all duration-500 font-body-md placeholder:text-outline/50"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setFormError(''); }}
                      placeholder="Email ID"
                      required
                      className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green text-on-surface transition-all duration-500 font-body-md placeholder:text-outline/50"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Mobile Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => { setForm({ ...form, phone: e.target.value }); setFormError(''); }}
                    placeholder="Contact Number"
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green text-on-surface transition-all duration-500 font-body-md placeholder:text-outline/50"
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant">Focus Area / Purpose</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Briefly describe your coaching goals..."
                    rows={3}
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3.5 px-0 focus:ring-0 focus:border-brand-green text-on-surface transition-all duration-500 resize-none font-body-md placeholder:text-outline/50"
                  />
                </div>
              </div>

              {/* Form error */}
              {formError && (
                <div className="mt-6 flex items-center gap-2 text-red-600 font-caption text-caption">
                  <span className="material-symbols-outlined text-lg">error</span>
                  {formError}
                </div>
              )}

              <div className="mt-12 flex justify-between">
                <button onClick={() => goTo(3)} className="px-8 py-4 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">arrow_back</span> Back
                </button>
                <button onClick={validateAndGoReview} className="bg-brand-black text-white px-10 py-4 font-label-lg text-label-lg rounded-xl hover:ring-2 hover:ring-brand-green hover:ring-offset-2 transition-all duration-500 active:scale-95 group flex items-center gap-2">
                  Review Booking <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Review & Confirm */}
          {step === 5 && (
            <div className="step-transition">
              <h2 className="font-headline-lg text-headline-md text-brand-black mb-8">Review your session</h2>
              <div className="space-y-6">
                {[
                  { label: 'DATE & TIME', value: `${formatDate()} at ${selectedTime} (GMT+5:30)` },
                  { label: 'CONSULTATION', value: `${consultType}${consultType === 'Virtual Session' ? ' (Zoom)' : ''}` },
                  { label: 'NAME', value: form.name },
                  { label: 'EMAIL', value: form.email },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between py-5 border-b border-outline-variant">
                    <span className="font-label-lg text-on-surface-variant uppercase tracking-wider">{row.label}</span>
                    <span className="font-label-lg text-on-surface">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-8 bg-surface-container-low border-l-4 border-brand-green rounded-r-2xl">
                <p className="font-body-md text-on-surface-variant italic leading-relaxed">
                  "A high-performance session to align vision with strategy."
                </p>
              </div>
              <div className="mt-12 flex justify-between">
                <button onClick={() => goTo(4)} className="px-8 py-4 font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">arrow_back</span> Edit
                </button>
                <button onClick={submitBooking} disabled={isSubmitting} className="bg-brand-black text-white px-10 py-4 font-label-lg text-label-lg rounded-xl hover:ring-2 hover:ring-brand-green hover:ring-offset-2 transition-all duration-500 active:scale-95 group flex items-center gap-2 disabled:opacity-60">
                  {isSubmitting ? 'Confirming...' : 'Confirm Booking'} <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">check</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Confirmation */}
          {step === 6 && (
            <div className="step-transition text-center py-16">
              <div className="w-24 h-24 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-10 animate-bounce">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <h2 className="font-display-lg text-[48px] text-brand-black mb-4 leading-tight">Request Submitted!</h2>

              {/* Management confirmation message */}
              <div className="max-w-lg mx-auto mb-12">
                <div className="p-8 bg-brand-green/5 border-2 border-brand-green/20 rounded-3xl text-left space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-green text-2xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                    <p className="font-body-md text-on-surface leading-relaxed">
                      Our management team will <strong>review your request</strong> and confirm your appointment if the selected date and time is available.
                    </p>
                  </div>
                  <div className="border-t border-brand-green/10 pt-5 space-y-3">
                    <p className="font-label-lg text-label-lg text-brand-black flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-green">mail</span>
                      Confirmation via Email
                    </p>
                    <p className="font-body-md text-on-surface-variant">
                      You will receive a confirmation at <strong className="text-brand-black">{form.email}</strong>
                    </p>
                  </div>
                  <div className="border-t border-brand-green/10 pt-5 space-y-3">
                    <p className="font-label-lg text-label-lg text-brand-black flex items-center gap-2">
                      <span className="material-symbols-outlined text-brand-green">chat</span>
                      Confirmation via WhatsApp
                    </p>
                    <p className="font-body-md text-on-surface-variant">
                      A message will also be sent to <strong className="text-brand-black">{form.phone}</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Session summary */}
              <div className="max-w-md mx-auto mb-12">
                <div className="p-6 border border-outline-variant rounded-3xl text-left space-y-4">
                  <p className="font-label-lg text-label-lg text-brand-black uppercase tracking-widest">Session Summary</p>
                  <div className="flex justify-between py-2 border-b border-outline-variant">
                    <span className="font-caption text-on-surface-variant uppercase">Date</span>
                    <span className="font-label-lg text-on-surface">{formatDate()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-outline-variant">
                    <span className="font-caption text-on-surface-variant uppercase">Time</span>
                    <span className="font-label-lg text-on-surface">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-outline-variant">
                    <span className="font-caption text-on-surface-variant uppercase">Type</span>
                    <span className="font-label-lg text-on-surface">{consultType}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-caption text-on-surface-variant uppercase">Name</span>
                    <span className="font-label-lg text-on-surface">{form.name}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/"
                className="inline-flex border-2 border-brand-black text-brand-black px-10 py-4 font-label-lg text-label-lg rounded-xl hover:bg-surface-container transition-all duration-500 items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">home</span> Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Booking;
