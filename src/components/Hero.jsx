import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ onBookNow }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-14T18:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background-image"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-sponsors">
  <span className="sponsor-label">PROUDLY SPONSORED BY</span>
  <div className="sponsor-names">
    <a 
  href="https://www.zomato.com/roorkee/the-pindi-bowl-1-roorkee-locality/order" 
  className="sponsor-name" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img src="https://postimg.cc/XXs6WN3D" alt="Pindi Bowl Logo" />
  Pindi Bowl
</a>

<a 
  href="https://maps.app.goo.gl/FNcr4reQ6RpUnq2i9" 
  className="sponsor-name" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img src="https://i.postimg.cc/6qHM582K/Test-Logo.png" alt="Flowery Hues Logo" />
  Flowery Hues
</a>
  </div>
</div>
        <div className="hero-badge">IIT Roorkee Presents</div>
        <h1 className="hero-title">
          Prom Night
          <span className="hero-year">2025</span>
        </h1>
        <div className="hero-details">
          <div className="detail-item">
            <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>14th October 2025</span>
          </div>
          <div className="detail-item">
            <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>6 PM Onwards</span>
          </div>
          <div className="detail-item">
            <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="3" strokeWidth="2"/>
            </svg>
            <span>
              <a href="https://maps.app.goo.gl/Mi2BUNdJptombS7f9" target="_blank" rel="noopener noreferrer">
                Mehta's Farm
              </a>
            </span>
          </div>
        </div>

        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>

        <a 
  href="https://forms.gle/zuJKbjzM1ji9DVGC7" 
  target="_blank" 
  rel="noopener noreferrer"
  className="cta-button"
>
  Book Your Tickets Now
</a>
      </div>
    </section>
  );
};

export default Hero;
