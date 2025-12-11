// BottomNav.jsx
import React from "react";

export default function BottomNav() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        color: "#ffffff",
        fontSize: "0.9rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        zIndex: 9999,
      }}
    >
      <span>© {new Date().getFullYear()} Ruman Saiyed</span>

      <button
        onClick={scrollToTop}
        style={{
          border: "1px solid #ffffff",
          background: "transparent",
          color: "#ffffff",
          padding: "6px 14px",
          borderRadius: "999px",
          fontSize: "0.8rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        Go to top ↑
      </button>
    </footer>
  );
}
