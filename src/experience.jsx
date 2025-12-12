// Dives.jsx
import React from "react";
import "./experience.css";

const experience = [
  {
    id: 1,
    title: "Phycom Corporation : Software Development Intern Jan 2025 - Jun 2025",
    desc: "- Migrated backend services from Java to Go (Golang) to enhance performance and scalability - Built a backend server in Go to process and manage real-time weather data from IoT devices - Integrated Google Cloud Datastore (NoSQL) for efficient weather data storage and retrieval - Developed data synchronization between the Go server and an Elixir server - Used Pub/Sub messaging for real-time updates, ensuring seamless data flow - Ensured a smooth server migration with minimal downtime and data integrity - Collaborated in daily scrums, contributing to agile development practices",
  },
  {
    id: 2,
    title: "Project 2",
    desc: "Description of project 2",
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Description of project 3",
  },
  {
    id: 4,
    title: "Project 4",
    desc: "Description of project 4",
  },
];

function Experiencecards() {
  return (
    <>
      <h1 style={{fontFamily: "'Fredoka One', sans-serif",
          textAlign: "center",
          letterSpacing: "3px"}}>
        Experience
      </h1>

      <div className="ecards-container">
        {experience.map((p) => (
          <div key={p.id} className="ecard">
            
            {/* REMOVE image for now unless you add one */}
            {/* <img src={p.img} alt={p.title} className="card-img" /> */}

            <div className="ecard-content">
              <h3 className="ecard-title">{p.title}</h3>
              <p className="ecard-desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experiencecards;
