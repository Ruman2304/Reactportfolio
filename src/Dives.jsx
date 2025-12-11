// Dives.jsx
import React from "react";
import "./cards.css";

const projects = [
  {
    id: 1,
    title: "Project 1",
    desc: "Description of project 1",
    img: "/images/p1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    desc: "Description of project 2",
    img: "/images/p2.jpg",
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
        Projects
      </h1>

    <div className="cards-container">
      {projects.map((p) => (
        <div key={p.id} className="card">
          <img src={p.img} alt={p.title} className="card-img" />
          <div className="card-content">
            <h3 className="card-title">{p.title}</h3>
            <p className="card-desc">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
    </html>
  </>
);

}

export default ProjectCards;
