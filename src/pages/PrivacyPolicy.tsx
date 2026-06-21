import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: '1. Introduction',
    content:
      'Welcome to Nandan Kumar Singh ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website nandankumar.com or engage with our coaching services.',
  },
  {
    title: '2. Information We Collect',
    content:
      'We collect personal information that you voluntarily provide to us when you book a consultation, fill out a form, or contact us. This may include: your name, email address, phone number, WhatsApp number, profession, company name, city, and coaching preferences.',
  },
  {
    title: '3. How We Use Your Information',
    content:
      'We use the information we collect to: process your consultation booking; send you session confirmations and follow-ups via email and WhatsApp; provide personalized coaching support and respond to your inquiries; improve our website and coaching experience; send performance insights and updates (only with your consent).',
  },
  {
    title: '4. Data Sharing',
    content:
      'We do not sell, trade, or rent your personal information to third parties. We may share your data only with: our coaching operations team for session scheduling; secure communication platforms for virtual sessions. All third-party service providers are bound to protect your data.',
  },
  {
    title: '5. Data Security',
    content:
      'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no electronic transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: '6. Cookies & Tracking',
    content:
      'Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.',
  },
  {
    title: '7. Your Rights',
    content:
      'You have the right to: access the personal information we hold about you; request correction of inaccurate data; request deletion of your personal data; opt out of marketing communications at any time; withdraw your consent where we rely on it for processing.',
  },
  {
    title: '8. Data Retention',
    content:
      'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Consultation data is typically retained for up to 2 years.',
  },
  {
    title: "9. Children's Privacy",
    content:
      'Our coaching services and website are intended for adults aged 18 and above. We do not knowingly collect personal information from children under 18. If you believe we have collected data from a minor, please contact us immediately.',
  },
  {
    title: '10. Changes to This Policy',
    content:
      'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a new "Last updated" date. We encourage you to review this policy periodically.',
  },
  {
    title: '11. Contact Us',
    content:
      'If you have any questions or concerns about this Privacy Policy, please contact us at:\n\nEmail: hello@nandankumar.com\nWhatsApp: +91 62321 38581\nAddress: LIG 722, DD Nagar Rd, Sector 2, DDU Nagar, Amanaka, Raipur, Chhattisgarh 492010',
  },
];

const PrivacyPolicy: React.FC = () => {
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
        Privacy Policy
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

export default PrivacyPolicy;
