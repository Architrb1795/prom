import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Reserve Your Spot</h2>
          <p className="pricing-subtitle">
            Limited seats available. Book now to secure your place at the most awaited event of the year
          </p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card featured">
            <div className="pricing-badge featured-badge">Couple Entry</div>

            {/* Offer Price Section */}
            <div className="offer-section">
              <div className="old-pricing-amount">
                <span className="currency">₹</span>
                <span className="old-price-strike">649</span>
                <span className="per-person-strike">per person</span>
              </div>
              <div className="pricing-amount">
                <span className="currency">₹</span>
                <span className="price">549</span>
                <span className="per-person">per person</span>
              </div>
              <div className="offer-text">For the first 30 couples only!</div>
            </div>

            {/* Updated Couple Price */}
            <div className="couple-price">
              <span className="currency">₹</span>
              <span className="new-couple-price"> ₹1099 for couple</span>
            </div>

            <ul className="pricing-features">
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Entry for Two
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Food & Refreshments
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Access to All Activities
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Prom King & Queen Contest
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Priority Seating
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Aesthetic Photo Corner
              </li>
            </ul>
            <a 
              href="https://forms.gle/ouzHWwYV3k1TRfM18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pricing-button featured-button"
            >
              Book Now!!!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;