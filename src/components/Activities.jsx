import React from 'react';
import './Activities.css';

const Activities = () => {
  const activities = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Prom King & Queen Contest',
      description: 'Compete for the crown and win exclusive gifts. Show your style and charisma on stage.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 18V5l12-2v13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="6" cy="18" r="3" strokeWidth="2"/>
          <circle cx="18" cy="16" r="3" strokeWidth="2"/>
        </svg>
      ),
      title: 'Live DJ Performance',
      description: 'Dance the night away with electrifying beats from professional DJs.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 2v20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Food & Refreshments',
      description: 'Refuel and recharge throughout the night with a variety of delicious food items and snacks available at the venue.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="13" r="4" strokeWidth="2"/>
        </svg>
      ),
      title: 'Themed Photo Booth',
      description: 'Capture picture-perfect moments with your friends in our professionally styled photo booth featuring custom backdrops and props.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5.5 8.5L9 12l-3.5 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.5 8.5L15 12l3.5 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="2" strokeWidth="2"/>
          <circle cx="15" cy="7" r="2" strokeWidth="2"/>
          <path d="M9 9v5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9v5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 14c0 2.5 1.3 4 3 4s3-1.5 3-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Slow Dance Session',
      description: 'Create magical memories during our dedicated slow dance session, perfect for those romantic moments under the stars.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Fun Games',
      description: 'Participate in exciting games and activities throughout the evening.'
    }
  ];

  return (
    <section className="activities" id="activities">
      <div className="activities-container">
        <div className="activities-visual">
          <img
            src="https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Prom celebration"
            className="activities-image"
          />
        </div>
        <div className="activities-header">
          <h2 className="activities-title">An Unforgettable Evening</h2>
          <p className="activities-subtitle">
            Experience a night filled with glamour, entertainment, and memories that will last forever
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-icon">{activity.icon}</div>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-description">{activity.description}</p>
            </div>
          ))}
        </div>

        <div className="prize-banner">
          <div className="prize-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 22h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="prize-content">
            <h3 className="prize-title">Exclusive Gifts for Winners</h3>
            <p className="prize-description">
              The Prom King and Queen will receive special gifts and recognition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
