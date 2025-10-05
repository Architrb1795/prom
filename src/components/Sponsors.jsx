import React from 'react';
import './Sponsors.css'; // Make sure you have a CSS file for styling

const Sponsors = () => {
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
    <section className="sponsors-section">
      <div className="sponsors-container">
        {sponsors.map((sponsor, index) => (
          <div className="sponsor-card" key={index}>
            <div className="sponsor-logo-container">
              {/* Use an <img> tag to display the logo from the URL */}
              <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="sponsor-logo" />
            </div>
            <h3 className="sponsor-name">{sponsor.name}</h3>
            <p className="sponsor-description">{sponsor.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;