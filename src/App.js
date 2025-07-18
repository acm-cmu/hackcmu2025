import React, { useState } from 'react';
import './App.css';
import DotGrid from './components/DotGrid';
import FaqPage from './components/Faq';


function App() {
  const [selectedDay, setSelectedDay] = useState('friday');

  return (
    <div className="pixel-app">
      <div className="dot-grid-bg">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor = "#1F003F"
          activeColor="#5227e1"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
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
      <div className="schedule-row">
        <div className="time">5:30 - 6:00 PM</div>
        <div className="divider"></div>
        <div className="event">
          <div className="title">Check-in</div>
          <div className="location">Tepper Simmons Auditorium</div>
          <div className="desc">Check in with organizers and find team members</div>
        </div>
      </div>
      <div className="schedule-row">
        <div className="time">6:00 - 6:30 PM</div>
        <div className="divider"></div>
        <div className="event">
          <div className="title">Opening Ceremony</div>
          <div className="location">Tepper Simmons Auditorium</div>
          <div className="desc">Join us for the opening ceremony of HackCMU 2025!</div>
        </div>
      </div>
      <div className="schedule-row food">
        <div className="time">7:00 - 9:00 PM</div>
        <div className="divider"></div>
        <div className="event">
          <div className="title">Dinner & Sponsor Fair</div>
          <div className="location">Tepper Simmons Auditorium</div>
          <div className="desc">Meet our amazing event sponsors!</div>
        </div>
      </div>
      <div className="schedule-row food">
        <div className="time">12:00 - 1:00 AM</div>
        <div className="divider"></div>
        <div className="event">
          <div className="title">Midnight Snack</div>
          <div className="location">Tepper Simmons Auditorium</div>
          <div className="desc">Fuel up with some late-night snacks!</div>
        </div>
      </div>
    </>
  )}
  {selectedDay === 'saturday' && (
  <>
    <div className="schedule-row food">
      <div className="time">9:00 - 10:00 AM</div>
      <div className="divider"></div>
      <div className="event">
        <div className="title">Breakfast</div>
        <div className="location">Tepper Simmons Auditoriums</div>
        <div className="desc">Get breakfast after a long night of hacking!</div>
      </div>
    </div>
    <div className="schedule-row food">
      <div className="time">12:00 - 1:00 PM</div>
      <div className="divider"></div>
      <div className="event">
        <div className="title">Lunch</div>
        <div className="location">Tepper Simmons Auditorium</div>
        <div className="desc">Grab a bite before submitting your final project.</div>
      </div>
    </div>
    <div className="schedule-row">
      <div className="time">1:00 PM</div>
      <div className="divider"></div>
      <div className="event">
        <div className="title">Project Submission Deadline</div>
        <div className="location">Submit via Google Forms (required)</div>
        <div className="desc">
          Make sure to submit your project description and track selection by 1:00 PM. 
          You can also share your project on Devpost (optional).
        </div>
      </div>
    </div>
    <div className="schedule-row">
      <div className="time">2:00 - 3:30 PM</div>
      <div className="divider"></div>
      <div className="event">
        <div className="title">Judging</div>
        <div className="location">Tepper Simmons Auditorium</div>
        <div className="desc">Judges will evaluate your projects — good luck!</div>
      </div>
    </div>
    <div className="schedule-row">
      <div className="time">3:30 - 4:30 PM</div>
      <div className="divider"></div>
      <div className="event">
        <div className="title">Expo</div>
        <div className="location">Tepper Simmons Auditorium</div>
        <div className="desc">Show off your project to fellow hackers and attendees.</div>
      </div>
    </div>
    <div className="schedule-row">
      <div className="time">5:00 - 6:00 PM</div>
      <div className="divider"></div>
      <div className="event">
        <div className="title">Closing Ceremony</div>
        <div className="location">Rangos Ballroom (CUC 2nd floor)</div>
        <div className="desc">We hope you continue to reach for the stars after our event!</div>
      </div>
    </div>
  </>
)}

</div>
      <h2 style={{ marginTop: '3rem' }}>FAQ</h2>
      <FaqPage/>
      </section>
      <section className="sponsors">
        <h2>SPONSORS</h2>
        <div className="sponsor-grid">
          <div className="sponsor">Anthropic</div>
          <div className="sponsor">Hudson River Trading</div>
          <div className="sponsor">Jane Street</div>
          <div className="sponsor">The Trade Desk</div>
          <div className="sponsor">Steven's Capital Management</div>
        </div>
      </section>

      <footer>
        PRESENTED BY ACM@CMU
      </footer>
    </div>
  );
}

export default App;
