import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is there a deadline for booking tickets?',
      answer: 'While there is no strict deadline, tickets are limited and are being sold on a first-come, first-served basis. We expect the slots to fill up very quickly, so we highly recommend you book your tickets as soon as possible to avoid disappointment.'
    },
    {
      question: 'What time should I arrive at the venue?',
      answer: 'Gates open at 5:30 PM. We recommend arriving by 6:00 PM to complete registration and settle in before the main event begins.'
    },
    {
      question: 'What is the dress code for the prom?',
      answer: 'The dress code is formal. Gentlemen are expected to wear suits or formal ethnic wear, while ladies should wear gowns, cocktail dresses, or formal ethnic attire.'
    },
    {
      question: 'Can I get a refund if I cannot attend?',
      answer: 'Tickets are non-refundable. However, you can transfer your ticket to another IIT Roorkee student by contacting the organizing team at least 3 days before the event.'
    },
    {
      question: 'Is re-entry allowed if I leave the venue?',
      answer: 'No, re-entry will not be permitted. For the safety and security of all our guests, we will be enforcing a strict no re-entry policy. Please make sure you have everything you need with you before you enter the venue.'
    },
    {
      question: 'How do I participate in the Prom King and Queen contest?',
      answer: 'All attendees are automatically eligible for the Prom King and Queen contest. Winners will be selected through a combination of audience voting and judges\' decision during the event.'
    },
    {
      question: 'What should I bring to the event?',
      answer: 'Please bring a valid college ID card for entry verification. Also carry your booking confirmation (digital or printed) and any personal essentials you might need.'
    },
    {
      question: 'Will there be a professional photographer?',
      answer: 'We will not have a dedicated event photographer. However, we have set up a special photo booth/photo corner with great lighting and fun props for you to capture all your memorable moments with your friends. Don\'t forget to bring your phones to click amazing pictures!'
    },
    {
      question: 'Will there be transportation available to and from the venue?',
      answer: 'Yes, we have made arrangements for your convenience. While you will need to arrange your own transport to the prom, we will have autos available late at night to ensure everyone has a safe and reliable way to get back to campus after the event concludes.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about the prom night
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline
                    points="6 9 12 15 18 9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Prom Night 2025</div>
          <p className="footer-text">
            An evening of elegance, entertainment, and unforgettable memories
          </p>
          <div className="footer-links">
            <a href="#activities">Activities</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <p className="footer-copyright">
            © 2025 Prom Night 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default FAQ;
