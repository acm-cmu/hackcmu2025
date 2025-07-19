import React, { useState } from "react";
import "./Sponsors.css";

// Reusable image component with webp fallback
function ResponsiveImage({ src, alt, className }) {
  const publicSrc = `${process.env.PUBLIC_URL}/${src}`;
  const webpSrc = publicSrc.replace(/\.png$/, '.webp');

  const handleError = (e) => {
    if (e.target.src.endsWith('.webp')) {
      e.target.src = publicSrc;
    }
  };

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" onError={handleError} />
      <source srcSet={publicSrc} type="image/png" />
      <img
        src={publicSrc}
        alt={alt}
        className={className}
        loading="lazy"
        onError={handleError}
      />
    </picture>
  );
}

// Optional popup (if still needed)
function Popup({ sponsor, onClose }) {
  if (!sponsor) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <ResponsiveImage
          src={sponsor.imagePopup}
          alt={sponsor.name}
          className="popup-image"
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
      imagePage: "assets/sponsors/citadel.png",
      imagePopup: "assets/sponsors/citadel.png",
      description: "A leading global financial institution.",
      link: "https://www.citadel.com",
    },
    {
      name: "The Trade Desk",
      imagePage: "assets/sponsors/thetradedesk.png",
      imagePopup: "assets/sponsors/thetradedesk.png",
      description: "World-class digital advertising platform.",
      link: "https://www.thetradedesk.com/us",
    },
    {
      name: "HRT",
      imagePage: "assets/sponsors/hrt.png",
      imagePopup: "assets/sponsors/hrt.png",
      description: "Hudson River Trading, quantitative trading firm.",
      link: "https://www.hudsonrivertrading.com/",
    },
    {
      name: "Stripe",
      imagePage: "assets/sponsors/stripe.png",
      imagePopup: "assets/sponsors/stripe.png",
      description: "Online payment processing for internet businesses.",
      link: "https://stripe.com",
    },
    {
      name: "D. E. Shaw",
      imagePage: "assets/sponsors/deshaw.png",
      imagePopup: "assets/sponsors/deshaw.png",
      description: "A global investment and technology development firm.",
      link: "https://www.deshaw.com",
    },
    {
      name: "Jane Street",
      imagePage: "assets/sponsors/janestreet.png",
      imagePopup: "assets/sponsors/janestreet.png",
      description: "Global trading firm.",
      link: "https://www.janestreet.com",
    },
    {
      name: "Lockheed Martin",
      imagePage: "assets/sponsors/lockheed.png",
      imagePopup: "assets/sponsors/lockheed.png",
      description: "Aerospace and defense company.",
      link: "https://www.lockheedmartin.com",
    },
    {
      name: "Anthropic",
      imagePage: "assets/sponsors/anthropic.png",
      imagePopup: "assets/sponsors/anthropic.png",
      description: "AI safety and research company.",
      link: "https://www.anthropic.com",
    },
    {
      name: "Ethereum",
      imagePage: "assets/sponsors/ethereum.png",
      imagePopup: "assets/sponsors/ethereum.png",
      description: "Open-source blockchain with smart contract functionality.",
      link: "https://ethereum.org",
    },
    {
      name: "Sandia",
      imagePage: "assets/sponsors/sandia.png",
      imagePopup: "assets/sponsors/sandia.png",
      description: "National security laboratory.",
      link: "https://www.sandia.gov",
    },
    {
      name: "SCM",
      imagePage: "assets/sponsors/scm.png",
      imagePopup: "assets/sponsors/scm.png",
      description: "Systematic Capital Management.",
      link: "https://www.scm-lp.com/",
    },
  ];

  return (
    <div id="sponsors">
      <div className="container">
        <div className="title" id="header">Sponsors</div>
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
              <ResponsiveImage src={sponsor.imagePage} alt={sponsor.name} />
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
