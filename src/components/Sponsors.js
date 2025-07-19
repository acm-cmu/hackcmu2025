import React, { useState } from "react";
import "./Sponsors.css";

// Import sponsor logos
import citadel from "../sponsors/citadel.webp";
import thetradedesk from "../sponsors/thetradedesk.webp";
import hrt from "../sponsors/hrt.webp";
import stripe from "../sponsors/stripe.webp";
import deshaw from "../sponsors/deshaw.webp";
import janestreet from "../sponsors/janestreet.webp";
import lockheed from "../sponsors/lockheed.webp";
import anthropic from "../sponsors/anthropic.webp";
import ethereum from "../sponsors/ethereum.webp";
import sandia from "../sponsors/sandia.webp";
import scm from "../sponsors/scm.webp";

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

export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const sponsors = [
    {
      name: "Citadel",
      image: citadel,
      description: "A leading global financial institution.",
      link: "https://www.citadel.com",
    },
    {
      name: "The Trade Desk",
      image: thetradedesk,
      description: "World-class digital advertising platform.",
      link: "https://www.thetradedesk.com/us",
    },
    {
      name: "HRT",
      image: hrt,
      description: "Hudson River Trading, quantitative trading firm.",
      link: "https://www.hudsonrivertrading.com/",
    },
    {
      name: "Stripe",
      image: stripe,
      description: "Online payment processing for internet businesses.",
      link: "https://stripe.com",
    },
    {
      name: "D. E. Shaw",
      image: deshaw,
      description: "A global investment and technology development firm.",
      link: "https://www.deshaw.com",
    },
    {
      name: "Jane Street",
      image: janestreet,
      description: "Global trading firm.",
      link: "https://www.janestreet.com",
    },
    {
      name: "Lockheed Martin",
      image: lockheed,
      description: "Aerospace and defense company.",
      link: "https://www.lockheedmartin.com",
    },
    {
      name: "Anthropic",
      image: anthropic,
      description: "AI safety and research company.",
      link: "https://www.anthropic.com",
    },
    {
      name: "Ethereum",
      image: ethereum,
      description: "Open-source blockchain with smart contract functionality.",
      link: "https://ethereum.org",
    },
    {
      name: "Sandia",
      image: sandia,
      description: "National security laboratory.",
      link: "https://www.sandia.gov",
    },
    {
      name: "SCM",
      image: scm,
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

        <div className="white-bg" id="logo-grid">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="sponsor-link"
              onClick={() => setSelectedSponsor({
                name: sponsor.name,
                imagePopup: sponsor.image,
                description: sponsor.description,
                link: sponsor.link
              })}
            >
              <img src={sponsor.image} alt={sponsor.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      <Popup sponsor={selectedSponsor} onClose={() => setSelectedSponsor(null)} />
    </div>
  );
}
