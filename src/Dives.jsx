// Dives.jsx
import React from "react";
import "./cards.css";
import lacross from "./assets/images.jpg";
import houe from "./assets/housde.png"
import anim from "./assets/ani.png"
import job from "./assets/jobportal.png"
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
    title: "Job Portal",
    desc: "Introducing our latest innovation: a comprehensive job portal designed to revolutionize the way professionals connect with career opportunities. Powered by cutting-edge technologies including PHP, HTML, CSS, JavaScript, and AJAX, our platform offers a seamless user experience from start to finish. But we didn’t stop there. Behind the scenes, our backend environment, powered by PHPMyAdmin, ensures smooth operations and easy management of user data. This robust infrastructure enables us to deliver a reliable and secure platform for all users.",
    img: job,
    href: "https://www.linkedin.com/posts/ruman-saiyed-4b4646299_excited-to-announce-the-successful-completion-activity-7193122138315243522--A9f/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgtB0gBggRPMWF9Fs_4MecM_tZqSX_6uxc"
  },
  {
    id: 4,
    title: "Animation Portfolio",
    desc: "MY ART STATION GALLERY YOU CAN SEE MY GAME PROJECTS AND BLENDER WORK HERE",
    img: anim,
    href:"https://www.artstation.com/rushan23"
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
        Projects
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
                Visit Demo →
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
