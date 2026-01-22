// Dives.jsx
import React from "react";
import "./experience.css";
import carImg from "./assets/phycom.jpeg";
import acm from"./assets/acm.svg";
import ibm from"./assets/blob.png";
import csuf from "./assets/csuf.webp";

import { materialAttenuationDistance } from "three/src/nodes/TSL.js";

const experience = [
    {
    id: 1,
    image:csuf,
    title: "Student Assistant Cal State Fullerton, Information Systems and Decision Science\n"+
    "- January 2026 – Present",
    desc:  "- Assisted students with academic and departmental inquiries, providing clear guidance on courses, procedures, and resources to ensure a positive and supportive experience.\n" +
"- Managed departmental communications by monitoring emails, coordinating information flow, and supporting faculty and staff with administrative and operational tasks.\n",
// "- Supported department outreach initiatives by staffing information tables, engaging with students, promoting departmental activities, and assisting professors and staff during events and daily operations.",
  },{
    id: 2,
    title:
      "Phycom Corporation : Software Development Intern \n"+
      "\n - Jan 2025 – Jun 2025",
    image: carImg,
    desc:
      "- Migrated backend services from Java to Go (Golang) to enhance performance and scalability\n" +
      "- Built a backend server in Go to process and manage real-time weather data from IoT devices\n" +
      "- Integrated Google Cloud Datastore (NoSQL) for efficient weather data storage and retrieval\n" +
      "- Developed data synchronization between the Go server and an Elixir server\n" +
      "- Used Pub/Sub messaging for real-time updates, ensuring seamless data flow\n" +
      "- Ensured a smooth server migration with minimal downtime and data integrity\n" +
      "- Collaborated in daily scrums, contributing to agile development practices",
  },
  {
    id: 3,
    image:acm,
    title: "ACM CSUF Game Dev Officer\n"+
    "- August 2025 – Present",
    desc:  "- Hosting hands-on game development workshops using Unity and Unreal Engine.\n" +
    "- Sharing industry game news, trends, and dev techniques with the club.\n" +
    "- Planning, organizing, and leading weekly game creation sessions.",
  },
  {
    id: 4,
    image:ibm,
    title: "IBM Skillbuild Data Science Intern\n"+
    "- Sep 2024 – Nov 2024",
    desc:
      "- Designed and developed a house price prediction model (84% accuracy) using Python, Flask, and Scikit-Learn.\n" +
      "- Performed data cleaning, visualization, feature engineering, and model optimization on large datasets.",
  },
];

function Experiencecards() {
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
        Experience
      </h1>

      <div className="ecards-container">
        {experience.map((p) => (
          <div key={p.id} className="ecard">
            {/* only render image if it exists */}
            {p.image && (
              <img src={p.image} alt={p.title} className="ecard-img" />
            )}

            <div className="ecard-content">
              <h3 className="ecard-title">{p.title}</h3>
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
        ))}
      </div>
    </>
  );
}

export default Experiencecards;
