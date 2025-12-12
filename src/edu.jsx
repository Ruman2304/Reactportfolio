// Dives.jsx
import React from "react";
import "./experience.css";

import csuf from "./assets/csuf.webp";
import gtu from "./assets/gtu.png";

const experience = [
  {
    id: 1,
    title:
      "Master's in Computer Science\n" +
      "California State University, Fullerton\n" +
      "Aug 2025 – May 2027",
    image: csuf,
    desc: "- GPA – 3.7\n",
  },
  {
    id: 2,
    image: gtu,
    title:
      "Bachelor's of Engineering : Computer Science and Engineering (AI/ML)\n" +
      "Gujarat Technologincal University\n" +
      "Aug 2022 – May 2025",
    desc:
    "- GPA - 3.9\n" ,
    
  },
];

function Education() {
  return (
    <>
      <h1
        style={{
          fontFamily: "'Fredoka One', sans-serif",
          textAlign: "center",
          letterSpacing: "3px",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        Education 
      </h1>

      <div className="ecards-container">
        {experience.map((p) => {
          const titleLines = p.title.split("\n");
          const mainTitle = titleLines[0];
          const subLines = titleLines.slice(1);

          return (
            <div key={p.id} className="ecard">
              {p.image && (
                <img src={p.image} alt={mainTitle} className="ecard-img" />
              )}

              <div className="ecard-content">
                {/* MAIN TITLE */}
                <h3 className="ecard-title">{mainTitle}</h3>

                {/* SUBTITLE: COLLEGE + DATES */}
                {subLines.length > 0 && (
                  <p className="ecard-subtitle">
                    {subLines.map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                )}

                {/* DESCRIPTION */}
                <p className="ecard-desc">
                  {p.desc.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Education;
