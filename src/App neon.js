import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedDay, setSelectedDay] = useState('friday');

  const faqs = [
    {
      q: "What is HackCMU?",
      a: "HackCMU is a 24-hour event where students from across campus come together to make something awesome — like an app, website or hardware hack."
    },
    {
      q: "How do I register?",
      a: "You can register through the link here: https://docs.google.com/forms/d/e/1FAIpQLSevS-JRXkp0jOwKZIhcYjlWa4HFXfzoSBbqc7lxhJ4o0WPKeQ/viewform"
    },
    // ... rest of your FAQ array
  ];

  return (
    <div className="app">
      <h1 className="title">HackCMU 2025</h1>

      <section className="schedule card">
        <h2>{'>'} Schedule</h2>
        <div className="day-buttons">
          <button
            className={selectedDay === 'friday' ? 'active' : ''}
            onClick={() => setSelectedDay('friday')}
          >
            FRIDAY 9/12
          </button>
          <button
            className={selectedDay === 'saturday' ? 'active' : ''}
            onClick={() => setSelectedDay('saturday')}
          >
            SATURDAY 9/13
          </button>
        </div>

        {selectedDay === 'friday' && (
          <div className="schedule-day">
            <div className="schedule-item main">
              <div className="time">5:30 - 6:00 PM</div>
              <div className="details">
                <strong>Check-in</strong><br/>
                Rashid Auditorium (GHC 4401)<br/>
                Check in with organizers and find team members
              </div>
            </div>
            <div className="schedule-item main">
              <div className="time">6:00 - 6:30 PM</div>
              <div className="details">
                <strong>Opening Ceremony</strong><br/>
                Rashid Auditorium (GHC 4401)<br/>
                Join us for the opening ceremony of HackCMU 2025!
              </div>
            </div>
            <div className="schedule-item food">
              <div className="time">7:00 - 9:00 PM</div>
              <div className="details">
                <strong>Dinner & Sponsor Fair</strong><br/>
                Across Rashid in the Glass Room<br/>
                Meet our amazing event sponsors!
              </div>
            </div>
          </div>
        )}

        {selectedDay === 'saturday' && (
          <div className="schedule-day">
            <div className="schedule-item food">
              <div className="time">12:00 - 1:00 AM</div>
              <div className="details">
                <strong>Midnight Snack</strong><br/>
                Gates La Prima (Gates 3rd floor)<br/>
                Scavenger Hunt!
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="faq card">
        <h2>{'>'} FAQ</h2>
        <ul>
          {faqs.map((item, index) => (
            <li key={index} className="faq-item">
              <details>
                <summary><strong>Q:</strong> {item.q}</summary>
                <p>{item.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </section>

      <section className="sponsors card">
        <h2>{'>'} Sponsors</h2>
        <div className="sponsor-tier">
          <h3>🚀 ROCKET</h3>
          <div className="grid">
            <div className="sponsor">Sponsor 1</div>
            <div className="sponsor">Sponsor 2</div>
            <div className="sponsor">Sponsor 3</div>
          </div>
        </div>
        <div className="sponsor-tier">
          <h3>🛰 SATELLITE</h3>
          <div className="grid">
            <div className="sponsor">Sponsor 4</div>
            <div className="sponsor">Sponsor 5</div>
          </div>
        </div>
        <div className="sponsor-tier">
          <h3>🚗 ROVER</h3>
          <div className="grid">
            <div className="sponsor">Sponsor 6</div>
            <div className="sponsor">Sponsor 7</div>
            <div className="sponsor">Sponsor 8</div>
          </div>
        </div>
      </section>

      <section className="prizes card">
        <h2>{'>'} Prizes</h2>
        <p>Coming soon...</p>
      </section>
    </div>
  );
}

export default App;
