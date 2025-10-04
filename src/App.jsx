import React, { useState } from 'react';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Pricing from './components/Pricing';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Socials from './components/Socials';
import './App.css';

function App() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="App">
      <Hero onBookNow={() => setShowBookingForm(true)} />
      <Activities />
      <Pricing onBookNow={() => setShowBookingForm(true)} />
      <FAQ />
      <Sponsors />
      <Socials />

      {showBookingForm && (
        <BookingForm onClose={() => setShowBookingForm(false)} />
      )}
    </div>
  );
}

export default App;
