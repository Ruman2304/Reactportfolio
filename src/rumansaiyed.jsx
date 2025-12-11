import React, { useEffect, useState } from "react";

const Ruman3D = () => {
  const [progress, setProgress] = useState(0); // for scroll
  const [tilt, setTilt] = useState({ x: 0, y: 0 }); // for mouse

  // SCROLL EFFECT: zoom + move + disappear
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight;
      const currentScroll = window.scrollY;
      const p = Math.min(currentScroll / maxScroll, 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 + progress * 2.5;
  const translateY = progress * 160;
  const opacity = Math.max(1 - progress * 1.5, 0);

  // MOUSE EFFECT: 3D tilt
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

    const maxRotate = 18; // degrees
    setTilt({
      x: -y * maxRotate, // rotateX (invert so it feels natural)
      y: x * maxRotate,  // rotateY
    });
  };

  const handleMouseLeave = () => {
    // Reset tilt when mouse leaves
    setTilt({ x: 0, y: 0 });
  };

  return (
    <html>
 
    <div
      style={{
        minHeight: "220vh",
        backgroundColor: "#ffffff",
        margin: 0,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          position: "sticky",
          top: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          // 3D context
          perspective: "900px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            // STREET STYLE BOLD
fontFamily: "'Orbitron', sans-serif",


            fontWeight: 1000,
            fontSize: "5rem",
            textTransform: "uppercase",

            color: "#000000",

            // COMBINED TRANSFORM: scroll + mouse 3D
            transform: `
              translateY(${translateY}px)
              scale(${scale})
              rotateX(${tilt.x}deg)
              rotateY(${tilt.y}deg)
              translateZ(0)
            `,
            transformOrigin: "center center",

            opacity,
            transition:
              "transform 0.08s ease-out, opacity 0.08s linear",
            pointerEvents: "auto", // so it can receive mouse events if needed
          }}
        >
          RUMAN SAIYED<div style={{
  textAlign: "center",
  marginTop: "20px",
  color: "black",
  fontSize: "1.2rem",
  fontWeight: "500",
  letterSpacing: "2px",
}}>
  SCROLL DOWN <br />
  <span style={{
    fontSize: "2rem",
    display: "inline-block",
    marginTop: "8px",
  }}>
    ↓
  </span>
</div>

        </div>
      </div>

      {/* Extra space so you can scroll */}
      <div style={{ height: "200vh" }} />
    </div></html>
  );
};

export default Ruman3D;
