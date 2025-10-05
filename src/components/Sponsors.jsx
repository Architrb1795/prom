import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'The Pindi Bowl',
      logo: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Premier event management and production company specializing in memorable experiences.'
    },
    {
      name: 'Flowery Hues',
      logo: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      description: 'Leading photography and videography studio capturing life\'s most precious moments.'
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
