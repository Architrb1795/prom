import React from 'react';
import './Guidelines.css'; // We will create this CSS file next

const Guidelines = () => {
  return (
    <section className="guidelines" id="guidelines">
      <div className="guidelines-container">
        <h2 className="guidelines-title">Important Guidelines & Disclaimers</h2>
        
        <div className="guideline-section">
          <h3 className="guideline-subtitle">Eligibility & Registration</h3>
          <ul className="guideline-list">
            <li className="guideline-item">This event is exclusively for first-year students. A valid college ID will be required for entry.</li>
            <li className="guideline-item">This form is for couple/pair entries only, which must consist of one gentleman and one lady. Submissions with two attendees of the same gender will be considered invalid, and entry will be denied without a refund.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3 className="guideline-subtitle">Tickets & Entry</h3>
          <ul className="guideline-list">
            <li className="guideline-item">Upon successful registration and payment, a personalized e-ticket will be sent to your email.</li>
            <li className="guideline-item">Entry is strictly by e-ticket and a valid college ID card. Tickets are non-transferable and non-refundable.</li>
            <li className="guideline-item">Gates will close at 8:00 PM. Please ensure you arrive on time to avoid any inconvenience.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3 className="guideline-subtitle">Code of Conduct</h3>
          <ul className="guideline-list">
            <li className="guideline-item">This is a strictly no-alcohol, no-smoking event. Attendees found under the influence will be denied entry.</li>
            <li className="guideline-item">All attendees are expected to maintain decorum. The organizing committee reserves the right to deny entry or ask anyone to leave for disruptive or inappropriate behavior.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3 className="guideline-subtitle">Official Disclaimer</h3>
          <ul className="guideline-list">
            <li className="guideline-item">This event is organized by the Prom Committee, an independent student body, and has no official connection with IIT Roorkee.</li>
            <li className="guideline-item">Attendees are responsible for their own personal belongings. The committee will not be held liable for any loss or damage.</li>
            <li className="guideline-item">By attending the event, you consent to be photographed or filmed. The media may be used by the committee for promotional purposes.</li>
          </ul>
        </div>

        <div className="guideline-section">
          <h3 className="guideline-subtitle">Contact</h3>
          <ul className="guideline-list">
            <li className="guideline-item">For any questions or clarifications, please contact the Prom Committee at</li>
            <a href="mailto:promnight.contact@example.com" className="contact-emai">
    prom2025iitr@gmail.com
  </a>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
