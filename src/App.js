import React, { useState } from 'react';
import './App.css';

/* components you already have */
import DotGrid   from './components/DotGrid';
import FaqPage   from './components/Faq';

/* sponsor images (WebP preferred) */
import citadel       from './sponsors/citadel.webp';
import thetradedesk  from './sponsors/thetradedesk.webp';
import hrt           from './sponsors/hrt.webp';
import stripe        from './sponsors/stripe.webp';
import deshaw        from './sponsors/deshaw.webp';
import janestreet    from './sponsors/janestreet.webp';
import lockheed      from './sponsors/lockheed.webp';
import anthropic     from './sponsors/anthropic.webp';
import ethereum      from './sponsors/ethereum.webp';
import sandia        from './sponsors/sandia.webp';
import scm           from './sponsors/scm.webp';
import jump          from './sponsors/jump.webp';
import yc            from './sponsors/YC.webp';
import bloomberg     from './sponsors/bloomberg.webp';
import roblox        from './sponsors/roblox.webp';

function App() {
  const [selectedDay, setSelectedDay] = useState('friday');

  return (
    <div className="pixel-app">
      {/* animated dotted background */}
      <div className="dot-grid-bg">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#2D1B4E"
          activeColor="#00FFF7"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* hero section */}
      <div className="hero-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/assets/designs/gates5.png`}
          alt="Gates"
          className="hero-bg-img"
        />

        <header className="hero">
          <h1 className="hero-title glitch" data-text="HACKCMU">
            HACKCMU
          </h1>
          <p className="date">September 12 – 13, 2025</p>
          <a
            href="https://forms.gle/Qit8dRRjE8M516dy9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="start-button">Sign Up</button>
          </a>

          {/* about box */}
          <section className="about">
            <div className="terminal-box">
              <div className="terminal-header">{'>> ABOUT <<'}</div>
              <div
                className="terminal-body glitch-about"
                data-text="HackCMU is Carnegie Mellon's premier hackathon, a 24-hour beginner-friendly challenge where creativity, code, and caffeine collide. Rally your crew and turn bold ideas into reality!"
              >
                <p>
                  HackCMU is Carnegie Mellon's premier hackathon, a 24-hour
                  beginner-friendly challenge where creativity, code, and
                  caffeine collide. Rally your crew and turn bold ideas into
                  reality!
                </p>
              </div>
            </div>
          </section>
        </header>
      </div>

      {/* schedule */}
      <section className="schedule">
        <h2 className="section-title glitch" data-text="SCHEDULE">
          SCHEDULE
        </h2>

        <div className="day-tabs">
          <button
            className={selectedDay === 'friday' ? 'active' : ''}
            onClick={() => setSelectedDay('friday')}
          >
            FRIDAY 9/12
          </button>
          <button
            className={selectedDay === 'saturday' ? 'active' : ''}
            onClick={() => setSelectedDay('saturday')}
          >
            SATURDAY 9/13
          </button>
        </div>

        <div className="schedule-items">
          {selectedDay === 'friday' && (
            <>
              {/* Friday rows */}
              <Row
                time="5:30 – 6:00 PM"
                title="Check‑in"
                location="Tepper Simmons Auditorium"
                desc="Check in with organizers and find team members."
              />
              <Row
                time="6:00 – 6:30 PM"
                title="Opening Ceremony"
                location="Tepper Simmons Auditorium"
                desc="Join us for the opening ceremony of HackCMU 2025!"
              />
              <Row
                time="7:00 – 9:00 PM"
                title="Dinner & Sponsor Fair"
                location="Tepper Simmons Auditorium"
                desc="Meet our amazing event sponsors!"
                food
              />
              <Row
                time="12:00 – 1:00 AM"
                title="Midnight Snack"
                location="Tepper Simmons Auditorium"
                desc="Fuel up with late–night snacks!"
                food
              />
            </>
          )}

          {selectedDay === 'saturday' && (
            <>
              {/* Saturday rows */}
              {/* <Row
                time="9:00 – 10:00 AM"
                title="Breakfast"
                location="Tepper Simmons Auditorium"
                desc="Grab breakfast after a long night of hacking!"
                food
              /> */}
              <Row
                time="12:00 – 1:00 PM"
                title="Lunch"
                location="Tepper Simmons Auditorium"
                desc="Grab a bite before submitting your final project."
                food
              />
              <Row
                time="4:00 PM"
                title="Project Submission Deadline"
                location={
                  <a
                    href="https://docs.google.com/forms/d/1YEgw8sjurf2Y6hz47QXgCO3IARuYKhjGPhx5sV7Hz80/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Submit via Google Forms
                  </a>
                }
                desc="Submit your project description and track selection."
              />

              <Row
                time="4:00 – 6:30 PM"
                title="Judging & Expo"
                location={
                  <a
                    href="https://docs.google.com/spreadsheets/d/1Cu5ByqUBvGSsO8LpD84Y5rrjzKTfActEb6Tlq6_dXuI/edit?gid=0#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Judging Schedule
                  </a>
                }
                desc="Show off your project to judges, other hackers, and our sponsors!"
              />
              <Row
                time="6:30 – 7:00 PM"
                title="Dinner"
                location="Tepper Simmons Auditorium"
                desc="Relax and enjoy dinner with fellow hackers."
              />
              <Row
                time="7:00 – 8:00 PM"
                title="Closing Ceremony"
                location="Tepper Simmons Auditorium"
                desc="We hope you continue to reach for the stars!"
              />
            </>
          )}
        </div>

        {/* FAQ */}
        <h2 className="section-title glitch" data-text="FAQ">
          FAQ
        </h2>
        <FaqPage />
      </section>

      {/* winners */}
<section className="winners">
  <h2 className="section-title glitch" data-text="WINNERS">
    WINNERS
  </h2>

  {/* Grand Winner */}
  <div className="grand-winner-card">
    <div className="gw-left">
      <div className="badge">Grand Winner</div>
      <h3 className="project-name">Medicly</h3>
      <ul className="team-list">
        <li>Julian Ng-Thow-Hing</li>
        <li>David Chung</li>
        <li>Dheeraj Vislawath</li>
        <li>Aarush Agarwal</li>
      </ul>
    </div>

  </div>

  {/* Track Winners */}
  <h3 className="subsection-title">Track Winners</h3>
  <div className="winners-grid">
    <WinnerCard
      track="Retro"
      project="null_pointer"
      team={[
        'Siddharth Radhakrishnan',
        'Jibran Hutchins',
        'Agneya Tharun',
        'Pius Lee',
      ]}
    />
    <WinnerCard
      track="Digital Media"
      project="Cortex Cam"
      team={[
        'Keegan Wang',
        'Aryan Pandalai',
        'Austin Chen',
        'Harsh Akunuri',
      ]}
    />
    <WinnerCard
      track="Health & Sustainability"
      project="RepCheck"
      team={[
        'Thomas Chen',
        'Daniel Yang',
        'Poting Chen',
        'Cheng-Yeh Chung',
      ]}
    />
    <WinnerCard
      track="Games & Gamification"
      project="Driftwords"
      team={['Phi Nguyen', 'Dustin Nguyen', 'Jeffrey Shen', 'Jack Zhu']}
    />
  </div>

  <h3 className="subsection-title">Sponsor Prizes</h3>
  <div className="winners-grid">
    <WinnerCard
      track="Best AI Hack (Anthropic)"
      project="heXray"
      team={[
        'Sean Borneman',
        'James Waters',
        'Jongsun Park',
        'Atri Dev'
      ]}
    />
  </div>

  {/* Honorable Mentions */}
  <h3 className="subsection-title">Honorable Mentions</h3>
  <div className="winners-grid hm-grid">
    <HonorableCard
      project="LaternFly"
      team={['Devin DeCosmo', 'Rumi Loghmani']}
    />
    <HonorableCard
      project="Ensemble"
      team={['Nick Mino', 'Matteo Cericola', 'Michael Huynh', 'Hani Muratza']}
    />
    <HonorableCard
      project="coDriver"
      team={['Maximilian Peng', 'Athreya Sriram', 'Alexander Lee']}
    />
  </div>
</section>


      {/* Resources */}

<section className="resources">
  <h2 className="section-title glitch" data-text="RESOURCES">
    RESOURCES
  </h2>
  <p className="infotext">
    Looking for help or extra support? Use the links below to access credits, mentoring, and helpful resources throughout the event.
  </p>


  <div className="resource-grid">
    <ResourceCard
      title="Credits"
      desc="We will send out a form to registered participants to claim $25 in Claude API credits, sponsored by Anthropic."
      hasButton={false}
    />

    <ResourceCard
      title="Mentors"
      desc="Need help with your project? Request a mentor and get paired with an expert."
      // link="https://example.com/request-mentor"
      buttonText="Request Mentor"
    />

    <ResourceCard
      title="Y Combinator x ACM@CMU"
      desc="Diana Hu, a YC Partner, will be on campus for an off-the-record talk and office hours."
      link="https://events.ycombinator.com/yc-cmu25"
      buttonText="Register for YC Event"
    />
  </div>
</section>

<section className="tracks">
  <h2 className="section-title glitch" data-text="TRACKS">
    TRACKS
  </h2>
  <p className="infotext">
    Track themes will be announced during the Opening Ceremony on Friday, September 12.
    Teams will choose a track when submitting your project on Saturday.
  </p>

  <div className="track-card-list">
    <TrackCard
      title="Retro"
      desc="Reinvent something old with a new twist! For instance, reinvent the notes app, reimagine the calculator, or redesign modern tech to look retro. Anything that emphasizes the past!"
    />

<TrackCard
  title="Games & Gamification"
  desc="Use game mechanics to motivate and engage! For instance, Build a to-do list as a game, design a video game, or use game mechanics to motivate and engage."
/>

<TrackCard
  title="Digital Media"
  desc="Create tools that empower communication! For instance, AI fact-checkers, smart transcribers, music products, — from helping journalists with interviews, to music products, to new media platforms."
/>

<TrackCard
  title="Health & Sustainability"
  desc="Create projects that improve health and promote sustainability — like apps for resource sharing, food rescue tools (e.g., TooGoodToGo), or new wellness solutions."
/>

  </div>
</section>



      {/* sponsors */}
      <section className="sponsors">
        <h2 className="section-title glitch" data-text="SPONSORS">
          SPONSORS
        </h2>

        <p className="infotext">
          Our work here at ACM@CMU would not be possible without the help of our
          amazing sponsors. We are immeasurably thankful for their support.
        </p>
        <p className="infotext">
          Interested in sponsoring us? Email&nbsp;
          <a href="mailto:acm-exec@cs.cmu.edu">acm-exec@cs.cmu.edu</a>.
        </p>
      </section>

        
      <div className="sponsor-grid">
  <a href="https://www.citadel.com/" target="_blank" rel="noopener noreferrer">
    <img src={citadel} alt="Citadel" className="sponsor-image" />
  </a>
  <a href="https://www.thetradedesk.com/" target="_blank" rel="noopener noreferrer">
    <img src={thetradedesk} alt="The Trade Desk" className="sponsor-image" />
  </a>
  <a href="https://www.hudsonrivertrading.com/" target="_blank" rel="noopener noreferrer">
    <img src={hrt} alt="Hudson River Trading" className="sponsor-image" />
  </a>
  <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">
    <img src={stripe} alt="Stripe" className="sponsor-image" />
  </a>
  <a href="https://www.deshaw.com/" target="_blank" rel="noopener noreferrer">
    <img src={deshaw} alt="D. E. Shaw" className="sponsor-image" />
  </a>
  <a href="https://www.janestreet.com/" target="_blank" rel="noopener noreferrer">
    <img src={janestreet} alt="Jane Street" className="sponsor-image" />
  </a>
  <a href="https://www.lockheedmartin.com/" target="_blank" rel="noopener noreferrer">
    <img src={lockheed} alt="Lockheed Martin" className="sponsor-image" />
  </a>
  <a href="https://www.anthropic.com/" target="_blank" rel="noopener noreferrer">
    <img src={anthropic} alt="Anthropic" className="sponsor-image" />
  </a>
  <a href="https://ethereum.foundation/" target="_blank" rel="noopener noreferrer">
    <img src={ethereum} alt="Ethereum Foundation" className="sponsor-image" />
  </a>
  <a href="https://www.sandia.gov/" target="_blank" rel="noopener noreferrer">
    <img src={sandia} alt="Sandia National Laboratories" className="sponsor-image" />
  </a>
  <a href="https://www.scm-lp.com/" target="_blank" rel="noopener noreferrer">
    <img src={scm} alt="Steven's Capital Management" className="sponsor-image" />
  </a>
  <a href="https://www.jumptrading.com/" target="_blank" rel="noopener noreferrer">
    <img src={jump} alt="Jump Trading" className="sponsor-image" />
  </a>
  <a href="https://www.bloomberg.com/" target="_blank" rel="noopener noreferrer">
    <img src={bloomberg} alt="JBloomberg" className="sponsor-image" />
  </a>
  <a href="https://www.ycombinator.com/" target="_blank" rel="noopener noreferrer">
    <img src={yc} alt="Jump Trading" className="sponsor-image" />
  </a>
  <a href="https://www.roblox.com/" target="_blank" rel="noopener noreferrer">
    <img src={roblox} alt="Roblox" className="sponsor-image" />
  </a>

</div>

      <footer>
        PRESENTED BY{' '}
        <a
          href="https://www.acmatcmu.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACM@CMU
        </a>
        <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: '#666' }}>
          HackCMU acknowledges the use of AI tools to assist in event organization and materials.
        </div>
      </footer>
    </div>
  );
}

/* ----- small helper sub‑components ----- */

function Row({ time, title, location, desc, food }) {
  const rowClass = food ? 'schedule-row food' : 'schedule-row';
  return (
    <div className={rowClass}>
      <div className="time">{time}</div>
      <div className="divider" />
      <div className="event">
        <div className="title">{title}</div>
        <div className="location">{location}</div>
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
}

function Sponsor({ link, img, alt }) {
  return (
    <a
      className="sponsor-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={img} alt={alt} className="sponsor-image" />
    </a>
  );
}

export default App;


function ResourceCard({ title, desc, link, buttonText, hasButton = true }) {
  return (
    <div className="resource-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      {hasButton && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="resource-button"
          style={{ lineHeight: "1.2" }} 
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}

function TrackCard({ icon = "✨", title, subtitle, desc }) {
  return (
    <div className="track-card">
      <div className="track-body">
        <div className="track-head">
          <h3 className="track-title">{title}</h3>
        </div>
        <p className="track-desc">{desc}</p>
      </div>
    </div>
  );
}

function WinnerCard({ track, project, team }) {
  return (
    <div className="winner-card">
      <div className="winner-card-head column-head">
        <span className="pill">{track}</span>
        <h4 className="project-name centered">{project}</h4>
      </div>
      <ul className="team-list vertical">
        {team.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  );
}


function HonorableCard({ project, team }) {
  return (
    <div className="winner-card hm-card">
      <div className="winner-card-head column-head">
        <span className="pill pill-muted">Honorable Mention</span>
        <h4 className="project-name centered">{project}</h4>
      </div>
      <ul className="team-list vertical">
        {team.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

