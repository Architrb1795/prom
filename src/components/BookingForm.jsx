import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ onClose }) => {
  const [bookingType, setBookingType] = useState('single');
  const [formData, setFormData] = useState({
    maleName: '',
    maleEnrollment: '',
    femaleName: '',
    femaleEnrollment: '',
    mobileNumber: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.maleName.trim()) {
      newErrors.maleName = 'Name is required';
    }

    if (!formData.maleEnrollment.trim()) {
      newErrors.maleEnrollment = 'Enrollment number is required';
    }

    if (bookingType === 'couple') {
      if (!formData.femaleName.trim()) {
        newErrors.femaleName = 'Partner name is required';
      }
      if (!formData.femaleEnrollment.trim()) {
        newErrors.femaleEnrollment = 'Partner enrollment number is required';
      }
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Invalid mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const totalPrice = bookingType === 'couple' ? 1299 : 649;
      alert(`Booking confirmed!\nType: ${bookingType}\nTotal: ₹${totalPrice}\n\nThank you for booking!`);
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="booking-overlay" onClick={handleOverlayClick}>
      <div className="booking-modal">
        <button className="close-button" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="booking-header">
          <h2 className="booking-title">Book Your Tickets</h2>
          <p className="booking-subtitle">Fill in your details to reserve your spot</p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="booking-type-selector">
            <button
              type="button"
              className={`type-button ${bookingType === 'single' ? 'active' : ''}`}
              onClick={() => setBookingType('single')}
            >
              <div className="type-label">Single</div>
              <div className="type-price">₹649</div>
            </button>
            <button
              type="button"
              className={`type-button ${bookingType === 'couple' ? 'active' : ''}`}
              onClick={() => setBookingType('couple')}
            >
              <div className="type-label">Couple</div>
              <div className="type-price">₹1299</div>
            </button>
          </div>

          <div className="form-section">
            <h3 className="section-title">Primary Details</h3>
            <div className="form-group">
              <label htmlFor="maleName">Name</label>
              <input
                type="text"
                id="maleName"
                name="maleName"
                value={formData.maleName}
                onChange={handleChange}
                className={errors.maleName ? 'error' : ''}
              />
              {errors.maleName && <span className="error-message">{errors.maleName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="maleEnrollment">Enrollment Number</label>
              <input
                type="text"
                id="maleEnrollment"
                name="maleEnrollment"
                value={formData.maleEnrollment}
                onChange={handleChange}
                className={errors.maleEnrollment ? 'error' : ''}
              />
              {errors.maleEnrollment && <span className="error-message">{errors.maleEnrollment}</span>}
            </div>
          </div>

          {bookingType === 'couple' && (
            <div className="form-section">
              <h3 className="section-title">Partner Details</h3>
              <div className="form-group">
                <label htmlFor="femaleName">Partner Name</label>
                <input
                  type="text"
                  id="femaleName"
                  name="femaleName"
                  value={formData.femaleName}
                  onChange={handleChange}
                  className={errors.femaleName ? 'error' : ''}
                />
                {errors.femaleName && <span className="error-message">{errors.femaleName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="femaleEnrollment">Partner Enrollment Number</label>
                <input
                  type="text"
                  id="femaleEnrollment"
                  name="femaleEnrollment"
                  value={formData.femaleEnrollment}
                  onChange={handleChange}
                  className={errors.femaleEnrollment ? 'error' : ''}
                />
                {errors.femaleEnrollment && <span className="error-message">{errors.femaleEnrollment}</span>}
              </div>
            </div>
          )}

          <div className="form-section">
            <h3 className="section-title">Contact Information</h3>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={errors.mobileNumber ? 'error' : ''}
              />
              {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
            </div>
          </div>

          <div className="total-section">
            <span className="total-label">Total Amount:</span>
            <span className="total-amount">₹{bookingType === 'couple' ? '1299' : '649'}</span>
          </div>

          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
