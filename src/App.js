import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedDay, setSelectedDay] = useState('friday');

  return (
    <div className="pixel-app">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/assets/designs/gates.png`} alt="Gates" className="logo" />
      </div>

      <header className="hero">
        <h1>
          <span className="glitch" data-text="HACKCMU">HACKCMU</span>
        </h1>
        <p className="date">September 12-13, 2025</p>
        <a href="https://forms.gle/Qit8dRRjE8M516dy9" target="_blank" rel="noopener noreferrer">
          <button className="start-button">Sign Up</button>
        </a>
        <p className="subtext">Sign up as a hacker or mentor</p>
      </header>

      <section className="about">
        <div className="terminal-box">
          <div className="terminal-header">{">> ABOUT <<"}</div>
          <div 
            className="terminal-body glitch-about"
            data-text="HackCMU is Carnegie Mellon's premier hackathon, a 24-hour coding adventure where your wildest tech ideas come alive. Grab your team, power up your pixel dreams, and build something epic."
          >
            <p>
              HackCMU is Carnegie Mellon's premier hackathon, 
              a 24-hour coding adventure where your wildest tech ideas come alive. 
              Grab your team, power up your pixel dreams, and build something epic.
            </p>
          </div>
        </div>
      </section>

      <section className="schedule">
        <h2>SCHEDULE</h2>
        <div className="day-tabs">
          <button className={selectedDay === 'friday' ? 'active' : ''} onClick={() => setSelectedDay('friday')}>
            FRIDAY 9/12
          </button>
          <button className={selectedDay === 'saturday' ? 'active' : ''} onClick={() => setSelectedDay('saturday')}>
            SATURDAY 9/13
          </button>
        </div>
        <div className="schedule-items">
          {selectedDay === 'friday' && (
            <>
              <div className="item main"><span>5:30 - 6:00 PM</span> Check-in @ Tepper Simmons</div>
              <div className="item main"><span>6:00 - 6:30 PM</span> Opening Ceremony</div>
              <div className="item food"><span>7:00 - 9:00 PM</span> Dinner & Sponsor Fair</div>
            </>
          )}
          {selectedDay === 'saturday' && (
            <>
              <div className="item food"><span>12:00 - 1:00 AM</span> Midnight Snack + Scavenger Hunt</div>
            </>
          )}
        </div>
      </section>

      <section className="faq">
        <h2>FAQ</h2>
        <details><summary>What is HackCMU?</summary><p>A 24-hour event where students build something awesome.</p></details>
        <details><summary>How do I register?</summary><p>Use the signup link provided on our site!</p></details>
        <details><summary>What is this year's theme?</summary><p>Retro!</p></details>
      </section>

      <section className="sponsors">
        <h2>SPONSORS</h2>
        <div className="sponsor-grid">
          <div className="sponsor">BigTech</div>
          <div className="sponsor">CodeCo</div>
          <div className="sponsor">HackSoft</div>
          <div className="sponsor">CyberDuck</div>
        </div>
      </section>

      <footer>
        PRESENTED BY ACM@CMU
      </footer>
    </div>
  );
}

export default App;
