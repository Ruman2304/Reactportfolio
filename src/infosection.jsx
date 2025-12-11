// InfoSection.jsx
import React from "react";
import "./info.css";

export default function InfoSection() {
  return (
    <section className="info-section">

      {/* BACKGROUND SCROLLING TEXT */}
      <div className="info-bg">
        <div className="info-bg-line info-bg-line--left">
          RUMANSAIYED • RUMANSAIYED • RUMANSAIYED • RUMANSAIYED • RUMANSAIYED •
        </div>
        <div className="info-bg-line info-bg-line--right">
          RUMANSAIYED • RUMANSAIYED • RUMANSAIYED • RUMANSAIYED • RUMANSAIYED •
        </div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="info-box">
        <h2>About Me</h2>
        <p>
          
Hi I am Ruman Saiyed, I am a Master of Science computer science student at CSU Fullerton. I am very passionate about new technologies and idea’s about the field of AI and problem solving.I am very exited to grow my skill and looking forward to opportunities where I can learn more about it.
        </p>
        <p>EDUCATION</p><p>
California State University, Fullerton , USA May 2027
Masters of Science : Computer Science
Coursework: CPSC 583 – Knowledge Representation and Reasoning, CPSC 544 – Advanced Software Process</p>
<p>
“Eat × Sleep × Code × Game × Repeat”</p>
      </div>
    </section>
  );
}
