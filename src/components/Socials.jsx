import React from 'react';
import './Socials.css';

const Socials = () => {
  return (
    <section className="socials">
      <div className="socials-container">
        <h2 className="socials-title">Stay Connected</h2>
        <p className="socials-subtitle">
          Follow us on Instagram for updates, behind-the-scenes content, and memories from the night
        </p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
          aria-label="Follow us on Instagram"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="instagram-icon">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="instagram-text">@PromNight2025</span>
        </a>
      </div>
    </section>
  );
};

export default Socials;
