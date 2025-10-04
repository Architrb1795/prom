import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Stellar Events Co.',
      logo: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Premier event management and production company specializing in memorable experiences.'
    },
    {
      name: 'Glamour Studios',
      logo: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      description: 'Leading photography and videography studio capturing life\'s most precious moments.'
    },
    {
      name: 'Rhythm Sound Systems',
      logo: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 18V5l12-2v13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="6" cy="18" r="3" strokeWidth="2"/>
          <circle cx="18" cy="16" r="3" strokeWidth="2"/>
        </svg>
      ),
      description: 'Professional audio equipment and DJ services for unforgettable entertainment.'
    },
    {
      name: 'Elite Catering Services',
      logo: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 2v20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Gourmet catering providing exceptional culinary experiences for special events.'
    },
    {
      name: 'Luxe Decor',
      logo: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Transforming venues with stunning decorations and elegant design concepts.'
    },
    {
      name: 'Fashion Forward Boutique',
      logo: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      description: 'Exclusive fashion retailer offering the latest trends in formal and prom wear.'
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
