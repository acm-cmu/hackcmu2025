import React, { useState, useEffect } from 'react';
import './MetricsRotator.css';

const metrics = [
  "24 hours",
  "600+ participants",
  "$1000+ in prizes",
  "15 sponsors",
  "150+ projects"
];

function MetricsRotator() {
  const [metricIndex, setMetricIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = metrics[metricIndex];

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80); // speed of typing
      return () => clearTimeout(timeout);
    } else {
      const holdTimeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText('');
        setMetricIndex((prev) => (prev + 1) % metrics.length);
      }, 2000); // how long full metric shows before moving to next
      return () => clearTimeout(holdTimeout);
    }
  }, [charIndex, metricIndex]);

  return (
    <div className="metrics-rotator">
      <span className="metric-typewriter">{displayText}</span>
      <span className="cursor">|</span>
    </div>
  );
}

export default MetricsRotator;
