// Dives.jsx
import React from "react";
import "./cards.css";
import lacross from "./assets/images.jpg";
import houe from "./assets/housde.png"
const projects = [
  {
    id: 1,
    title: "La cross Appengine",
    desc: "Migrated backend services from Java to Go (Golang) to enhance performance and scalability Built a backend server in Go to process and manage real-time weather data from IoT devices. Integrated Google Cloud Datastore (NoSQL) for efficient weather data storage and retrieval. Developed data synchronization between the Go server and an Elixir server. Used Pub/Sub messaging for real-time updates, ensuring seamless data flow. Ensured a smooth server migration with minimal downtime and data integrity. Collaborated in daily scrums, contributing to agile development practices",
    img:lacross,
    href: "https://www.lacrossetechnology.com/"
  },
  {
    id: 2,
    title: "House Price Predictor",
    desc: "Introducing the House Price Predictor, a user-friendly tool created with Flask framework and a Linear Regression model. Using a dataset from Kaggle of Bengalore house prices, it achieves over 84% accuracy in estimating home values. This tool helps real estate professionals and homebuyers make informed decisions with reliable predictions based on past data. Made under in IBM skillbuild 6 week internship of data analytics.",
    img: houe,
    href:"https://www.linkedin.com/posts/ruman-saiyed-4b4646299_introducing-the-house-price-predictor-a-activity-7222435435917000705-_lmS/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgtB0gBggRPMWF9Fs_4MecM_tZqSX_6uxc"
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Description of project 3",
    img: "/images/p3.jpg",
  },
  {
    id: 4,
    title: "Project 4",
    desc: "Description of project 4",
    img: "/images/p4.jpg",
  },
  {
    id: 5,
    title: "Project 5",
    desc: "Description of project 5",
    img: "/images/p5.jpg",
  },
];

function ProjectCards() {
 return (
  <>
  <html>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600&family=Bubblegum+Sans&family=Fredoka+One&family=Chewy&family=Lilita+One&family=Varela+Round&display=swap" rel="stylesheet"></link>

 <h1 style={{fontFamily: "'Fredoka One', sans-serif",
          textAlign: "center",
          letterSpacing: "3px"}}>
        Projects (Under Construction Please Scroll Down)
      </h1>

    <div className="cards-container">
      {projects.map((p) => (
        <div key={p.id} className="card">
          <img src={p.img} alt={p.title} className="card-img" />
          <div className="card-content">
            <h3 className="card-title">{p.title}</h3>
            <p className="card-desc">{p.desc}</p>
             {/* LINK */}
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Visit Website →
              </a>
          </div>
        </div>
      ))}
    </div>
    </html>
  </>
);

}

export default ProjectCards;
