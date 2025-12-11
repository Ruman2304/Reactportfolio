// SprayCursor.jsx
import React, { useEffect, useState } from "react";

function SprayCursor() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;

      const newDots = [];

      // create a small "spray" of dots around the cursor
      for (let i = 0; i < 10; i++) {
        newDots.push({
          id: Date.now() + Math.random(),
          x: clientX + (Math.random() - 0.5) * 20, // random spread
          y: clientY + (Math.random() - 0.5) * 20,
        });
      }

      setDots((prev) => [...prev, ...newDots]);

      // remove each dot after a short time
      newDots.forEach((dot) => {
        setTimeout(() => {
          setDots((prev) => prev.filter((d) => d.id !== dot.id));
        }, 400); // 0.4s lifetime
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none", // doesn't block clicks
        zIndex: 9999,
      }}
    >
      {dots.map((dot) => (
        <span
          key={dot.id}
          style={{
            position: "absolute",
            left: dot.x,
            top: dot.y,
            width: 10,
            height: 10,
            background: "black",
            borderRadius: "50%",
            opacity: 0.7,
            filter: "blur(1px)",
            transform: "translate(-50%, -50%)",
            animation: "sprayFade 0.4s ease-out forwards",
          }}
        />
      ))}
    </div>
  );
}

export default SprayCursor;
