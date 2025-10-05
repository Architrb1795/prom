import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'The Pindi Bowl',
      logo: (
        // New Ramen Bowl Icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 11h16a1 1 0 0 1 1 1v4a6 6 0 0 1-12 4v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a6 6 0 0 1-12-4v-4a1 1 0 0 1 1-1h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6s-2 2-2 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 6s-2 2-2 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 6s-2 2-2 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 6s-2 2-2 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Specializing in a wide array of savory bowl cuisines, ensuring every meal is served with passion and love.'
    },
    {
      name: 'Flowery Hues',
      logo: (
        // New Perfume Bottle Icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M16 3h-8v4l-2 2v10h12V9l-2-2V3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 3v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 3v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Define your style and express your essence. Flowery Hues offers unique fragrances for an unforgettable evening.'
    }
  ];

  return (
    <section className="sponsors" id="sponsors">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <h2 className="sponsors-title">Our Sponsors</h2>
          <p className="sponsors-subtitle">
            A heartfelt thank you to our amazing sponsors who make this night possible
          </p>
        </div>

        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <div className="sponsor-logo">{sponsor.logo}</div>
              <h3 className="sponsor-name">{sponsor.name}</h3>
              <p className="sponsor-description">{sponsor.description}</p>
            </div>
          ))}
        </div>

        <div className="sponsors-footer">
          <p className="sponsors-footer-text">
            Interested in sponsoring future events? Contact us to learn more about partnership opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
