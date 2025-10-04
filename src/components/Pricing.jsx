import React from 'react';
import './Pricing.css';

const Pricing = ({ onBookNow }) => {
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
            <div className="pricing-amount">
              <span className="currency">₹</span>
              <span className="price">649</span>
              <span className="per-person">per person</span>
            </div>
            <div className="couple-price">₹1299 for couple</div>
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
                Premium Dining for Both
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
            <button className="pricing-button featured-button" onClick={onBookNow}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
