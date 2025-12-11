// ResumeSection.jsx
import React, { useEffect, useRef, useState } from "react";
import carImg from "./assets/car.png"; // your car image

function ResumeSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;

      let raw = 1 - (sectionCenter - viewportCenter) / vh;
      const clamped = Math.max(0, Math.min(1, raw));

      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TOP → BOTTOM interpolation
  // progress = 0 → far above
  // progress = 1 → far below
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1000;

  const startY = -screenHeight / 2 ;   // far above
  const endY   = screenHeight / 3;    // far below

  const translateY = startY + (endY - startY) * progress;

  // Optional little rotation for realism
  const rotation = (progress - 0.5) * 20;

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Center Resume Button */}
 <a
  href="/resume.pdf"
  download
  style={{
    padding: "18px 42px",
    borderRadius: "50px",
    background: "#fff",
    border: "2px solid black",
    fontFamily:"'Orbitron', sans-serif",
    fontWidth:700,
    textTransform: "uppercase",
    letterSpacing: "2px",
    zIndex: 3,
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    display: "inline-block",
  }}
>
  Resume Download
</a>

      {/* CAR — moves top → bottom */}
      <img
        src={carImg}
        alt="car"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "130px",
          transform: `
            translate(-50%, -50%)
            translateY(${translateY}px)
            rotate(${rotation}deg)
          `,
          transition: "transform 0.04s linear",
          filter: "drop-shadow(0 8px 15px rgba(0,0,0,0.45))",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </section>
  );
}

export default ResumeSection;
