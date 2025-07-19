import React, { useState } from "react";
import "./Sponsors.css";

// Optional popup
function Popup({ sponsor, onClose }) {
  if (!sponsor) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={sponsor.imagePopup}
          alt={sponsor.name}
          className="popup-image"
          loading="lazy"
        />
        <div className="popup-text">
          <h2>{sponsor.name}</h2>
          <p>{sponsor.description}</p>
          <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}

// Main Sponsors component
export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const sponsors = [
    {
      name: "Citadel",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/citadel.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/citadel.webp`,
      description: "A leading global financial institution.",
      link: "https://www.citadel.com",
    },
    {
      name: "The Trade Desk",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/thetradedesk.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/thetradedesk.webp`,
      description: "World-class digital advertising platform.",
      link: "https://www.thetradedesk.com/us",
    },
    {
      name: "HRT",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/hrt.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/hrt.webp`,
      description: "Hudson River Trading, quantitative trading firm.",
      link: "https://www.hudsonrivertrading.com/",
    },
    {
      name: "Stripe",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/stripe.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/stripe.webp`,
      description: "Online payment processing for internet businesses.",
      link: "https://stripe.com",
    },
    {
      name: "D. E. Shaw",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/deshaw.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/deshaw.webp`,
      description: "A global investment and technology development firm.",
      link: "https://www.deshaw.com",
    },
    {
      name: "Jane Street",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/janestreet.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/janestreet.webp`,
      description: "Global trading firm.",
      link: "https://www.janestreet.com",
    },
    {
      name: "Lockheed Martin",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/lockheed.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/lockheed.webp`,
      description: "Aerospace and defense company.",
      link: "https://www.lockheedmartin.com",
    },
    {
      name: "Anthropic",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/anthropic.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/anthropic.webp`,
      description: "AI safety and research company.",
      link: "https://www.anthropic.com",
    },
    {
      name: "Ethereum",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/ethereum.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/ethereum.webp`,
      description: "Open-source blockchain with smart contract functionality.",
      link: "https://ethereum.org",
    },
    {
      name: "Sandia",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/sandia.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/sandia.webp`,
      description: "National security laboratory.",
      link: "https://www.sandia.gov",
    },
    {
      name: "SCM",
      imagePage: `${process.env.PUBLIC_URL}/assets/sponsors/scm.webp`,
      imagePopup: `${process.env.PUBLIC_URL}/assets/sponsors/scm.webp`,
      description: "Systematic Capital Management.",
      link: "https://www.scm-lp.com/",
    },
  ];

  return (
    <div id="sponsors">
      <div className="container">
        <div className="infotext">
          Our work here at ACM@CMU would not be possible without the help of our amazing sponsors.
          We are immeasurably thankful for their support.
        </div>
        <div className="infotext">
          Interested in sponsoring us? Email us at <a href="mailto:acm-exec@cs.cmu.edu">acm-exec@cs.cmu.edu</a>.
        </div>

        {/* Single unified white box containing all sponsor logos */}
        <div className="white-bg" id="logo-grid">
          {sponsors.map((sponsor, index) => (
            <div
              className="sponsor-link"
              key={index}
              onClick={() => setSelectedSponsor(sponsor)}
            >
              <img
                src={sponsor.imagePage}
                alt={sponsor.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {selectedSponsor && (
          <Popup sponsor={selectedSponsor} onClose={() => setSelectedSponsor(null)} />
        )}
      </div>
    </div>
  );
}
