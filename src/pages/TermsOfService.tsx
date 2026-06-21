import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By accessing and using nandankumar.com ("the Website") or booking any coaching session with Nandan Kumar Singh, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or book our services.',
  },
  {
    title: '2. Consultation Booking',
    content:
      'All consultation bookings are subject to availability and confirmation. Booking is complete only after: (a) submission of the booking form with accurate information, (b) selection of a date, time, and consultation format, and (c) receipt of a confirmation email. Providing false or misleading information may result in cancellation of your booking.',
  },
  {
    title: '3. Pricing & Payment',
    content:
      'All coaching fees are quoted in Indian Rupees (INR) or US Dollars (USD) and are inclusive of applicable taxes unless otherwise stated. Payment terms will be communicated during the booking process. Your session is confirmed only after payment has been verified.',
  },
  {
    title: '4. Cancellation & Rescheduling',
    content:
      'Cancellation or rescheduling requests must be submitted at least 24 hours prior to the scheduled session via email. Sessions cancelled within 24 hours of the scheduled time may not be eligible for a refund or reschedule. In the event of cancellation by Nandan Kumar Singh, a full refund or priority rescheduling will be provided.',
  },
  {
    title: '5. Session Conduct',
    content:
      'By attending our coaching sessions, you agree to: engage actively and honestly in the coaching process; treat the coach and any supporting staff with respect; refrain from recording or distributing session content without prior written consent; not engage in any disruptive, harmful, or unlawful behavior during sessions.',
  },
  {
    title: '6. Intellectual Property',
    content:
      'All content on nandankumar.com, including but not limited to text, images, videos, logos, designs, frameworks, and coaching materials, is the property of Nandan Kumar Singh and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written permission. Coaching materials and worksheets provided are for personal use only.',
  },
  {
    title: '7. Confidentiality',
    content:
      'Information shared during coaching sessions is treated as confidential. However, coaching is not a substitute for professional therapy, legal advice, or medical treatment. The coach is not liable for decisions made based on information discussed during sessions. We reserve the right to share anonymized case studies for educational purposes.',
  },
  {
    title: '8. Photography & Recording',
    content:
      'By attending in-person events or workshops, you consent to being photographed, filmed, or recorded. These materials may be used for promotional purposes across our website, social media, and marketing materials. If you do not wish to be photographed or recorded, please inform our team in advance.',
  },
  {
    title: '9. Limitation of Liability',
    content:
      'To the fullest extent permitted by law, Nandan Kumar Singh and its team shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or attendance at coaching sessions. Our total liability shall not exceed the amount you paid for the coaching service.',
  },
  {
    title: '10. Force Majeure',
    content:
      'We shall not be held liable for any failure or delay in performing our obligations under these terms where such failure or delay results from events beyond our reasonable control, including but not limited to natural disasters, government actions, pandemics, strikes, or technical failures.',
  },
  {
    title: '11. Modifications to Terms',
    content:
      'We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website or attendance at coaching sessions after any changes constitutes acceptance of the modified terms.',
  },
  {
    title: '12. Governing Law',
    content:
      'These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts of Raipur, Chhattisgarh.',
  },
  {
    title: '13. Contact',
    content:
      'For any questions regarding these Terms of Service, please contact us:\n\nEmail: hello@nandankumar.com\nWhatsApp: +91 62321 38581\nAddress: LIG 722, DD Nagar Rd, Sector 2, DDU Nagar, Amanaka, Raipur, Chhattisgarh 492010',
  },
];

const TermsOfService: React.FC = () => {
  return (
    <section className="max-w-container-max mx-auto px-8 py-section-padding-desktop">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-primary font-label-lg text-label-lg hover:underline mb-8"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span> Back to Home
      </Link>

      <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
        Terms of Service
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-12">
        Last updated: June 15, 2025
      </p>

      <div className="bg-surface-container-lowest p-8 md:p-12 rounded-lg ambient-shadow border border-outline-variant">
        {sections.map((section, i) => (
          <div
            key={i}
            className={
              i < sections.length - 1
                ? 'mb-9 pb-9 border-b border-outline-variant'
                : ''
            }
          >
            <h2 className="font-headline-md text-body-lg font-bold text-on-surface mb-3">
              {section.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant whitespace-pre-line leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsOfService;
