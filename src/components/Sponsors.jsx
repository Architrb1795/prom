import React from 'react';
import './Sponsors.css';

const sponsors = [
    {
      name: 'The Pindi Bowl',
      // The 'logo' property is now the URL to the image
      logo: 'https://i.postimg.cc/wTpqh3rH/Pindi-Bowl-Logo.png',
      description: 'Specializing in a wide array of savory bowl cuisines, ensuring every meal is served with passion and love.'
    },
    {
      name: 'Flowery Hues',
      // The 'logo' property is now the URL to the image
      logo: 'https://i.postimg.cc/6qHM582K/Test-Logo.png',
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
