// src/App.js
import React, { useEffect, useState } from "react";
import DesktopApp from "./AppDesktop"; // your current code, renamed
import MobileApp from "./AppMobile";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // or use userAgent for more precision
    };

    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile); // update on resize

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobileApp /> : <DesktopApp />;
}

export default App;
