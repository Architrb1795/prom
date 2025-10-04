import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the dress code for the prom?',
      answer: 'The dress code is formal. Gentlemen are expected to wear suits or formal ethnic wear, while ladies should wear gowns, cocktail dresses, or formal ethnic attire.'
    },
    {
      question: 'Can I get a refund if I cannot attend?',
      answer: 'Tickets are non-refundable. However, you can transfer your ticket to another IIT Roorkee student by contacting the organizing team at least 3 days before the event.'
    },
    {
      question: 'Is outside food and beverages allowed?',
      answer: 'No, outside food and beverages are not permitted. A premium dining experience with multiple cuisines will be provided as part of your ticket.'
    },
    {
      question: 'How do I participate in the Prom King and Queen contest?',
      answer: 'All attendees are automatically eligible for the Prom King and Queen contest. Winners will be selected through a combination of audience voting and judges\' decision during the event.'
    },
    {
      question: 'What time should I arrive at the venue?',
      answer: 'Gates open at 5:30 PM. We recommend arriving by 6:00 PM to complete registration and settle in before the main event begins.'
    },
    {
      question: 'Is parking available at Mehta\'s Farm?',
      answer: 'Yes, ample parking space is available at the venue. However, we encourage carpooling or using shared transportation for convenience.'
    },
    {
      question: 'What should I bring to the event?',
      answer: 'Please bring a valid college ID card for entry verification. Also carry your booking confirmation (digital or printed) and any personal essentials you might need.'
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
          <div className="footer-logo">IIT Roorkee Prom 2025</div>
          <p className="footer-text">
            An evening of elegance, entertainment, and unforgettable memories
          </p>
          <div className="footer-links">
            <a href="#activities">Activities</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <p className="footer-copyright">
            © 2025 IIT Roorkee. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default FAQ;
