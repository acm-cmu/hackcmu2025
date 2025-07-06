import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import "./glitch.css";

export default function HackathonLanding() {
  return (
    <div className="bg-black text-green-400 min-h-screen font-mono" style={{ backgroundImage: 'url(/pixel-bg.png)', backgroundSize: 'cover' }}>
      {/* Hero Section with glitch text */}
      <div className="flex flex-col items-center justify-center py-20 space-y-6">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="glitch text-6xl tracking-widest" data-text="RETRO HACKATHON 2025">
          RETRO HACKATHON 2025
        </motion.h1>
        <p className="text-xl">Code like it's 1985 — with 2025 tech</p>
        <Button className="mt-4 bg-green-400 text-black hover:bg-green-300">Register Now</Button>
      </div>

      {/* Schedule Section */}
      <div className="px-10 py-10">
        <h2 className="text-3xl mb-6 border-b-2 border-green-400 pb-2">Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card><CardContent className="p-4"><h3 className="text-2xl mb-2">Day 1</h3><ul className="list-disc list-inside"><li>9:00 AM - Opening Ceremony</li><li>10:00 AM - Hacking Begins</li><li>1:00 PM - Lunch</li><li>6:00 PM - Tech Talk</li><li>9:00 PM - End</li></ul></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-2xl mb-2">Day 2</h3><ul className="list-disc list-inside"><li>9:00 AM - Continue Hacking</li><li>12:00 PM - Lunch</li><li>3:00 PM - Demos</li><li>5:00 PM - Closing</li></ul></CardContent></Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-10 py-10">
        <h2 className="text-3xl mb-6 border-b-2 border-green-400 pb-2">FAQ</h2>
        <div className="space-y-4">
          <Card><CardContent className="p-4"><h4 className="text-xl mb-1">Who can participate?</h4><p>Anyone with a passion for coding!</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="text-xl mb-1">Do I need a team?</h4><p>Come solo or form a team here.</p></CardContent></Card>
          <Card><CardContent className="p-4"><h4 className="text-xl mb-1">What to build?</h4><p>Games, AI, hardware hacks. Go wild.</p></CardContent></Card>
        </div>
      </div>

      {/* Sponsors */}
      <div className="px-10 py-10 border-t-2 border-green-400 mt-10">
        <h2 className="text-3xl mb-6">Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="flex items-center justify-center"><img src="/sponsor1.png" alt="Gold Sponsor" className="h-16"/></div>
          <div className="flex items-center justify-center"><img src="/sponsor2.png" alt="Gold Sponsor" className="h-16"/></div>
          <div className="flex items-center justify-center"><img src="/sponsor3.png" alt="Silver Sponsor" className="h-12"/></div>
          <div className="flex items-center justify-center"><img src="/sponsor4.png" alt="Bronze Sponsor" className="h-10"/></div>
        </div>
        <p className="text-center">Interested in sponsoring? <span className="underline">Contact us</span>!</p>
      </div>
    </div>
  );
}

/* glitch.css */
.glitch {
  position: relative;
  color: #00ff00;
  animation: glitch 1s infinite;
}
.glitch:before, .glitch:after {
  content: attr(data-text);
  position: absolute;
  left: 0;
}
.glitch:before {
  animation: glitchTop 1s infinite;
  top: -2px;
  color: #f0f;
}
.glitch:after {
  animation: glitchBottom 1s infinite;
  top: 2px;
  color: #0ff;
}
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px,2px); }
  40% { transform: translate(-2px,-2px); }
  60% { transform: translate(2px,2px); }
  80% { transform: translate(2px,-2px); }
  100% { transform: translate(0); }
}
@keyframes glitchTop {
  0% { transform: translate(0); }
  20% { transform: translate(2px,-2px); }
  40% { transform: translate(-2px,2px); }
  60% { transform: translate(2px,2px); }
  80% { transform: translate(-2px,-2px); }
  100% { transform: translate(0); }
}
@keyframes glitchBottom {
  0% { transform: translate(0); }
  20% { transform: translate(-2px,2px); }
  40% { transform: translate(2px,-2px); }
  60% { transform: translate(-2px,-2px); }
  80% { transform: translate(2px,2px); }
  100% { transform: translate(0); }
}
