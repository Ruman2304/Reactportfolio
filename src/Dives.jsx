import React, { useState } from "react";
import "./cards.css";
import lacross from "./assets/images.jpg";
import houe from "./assets/housde.png";
import anim from "./assets/ani.png";
import mine from "./assets/mine.webp";
import jp2 from "./assets/jp2.png";
import jp3 from "./assets/jp3.png";
import jp4 from "./assets/jp4.png";
import ani2 from "./assets/ani2.png";
import ac1 from "./assets/ac1.png";
import lc2 from "./assets/lc2.png";
import ac2 from "./assets/ac2.png";
import ac3 from "./assets/ac3.png";
import ac4 from "./assets/ac4.png";
import jp5 from "./assets/jp5.png";

const projects = [
  {
    id: 1,
    title: "La Cross Appengine",
    tags: ["Go", "GCP", "Pub/Sub", "IoT", "Elixir"],
    desc: "Migrated backend services from Java to Go to enhance performance and scalability. Built a server to process real-time weather data from IoT devices, integrated Google Cloud Datastore, and developed data sync between Go and Elixir servers using Pub/Sub messaging.",
    images: [lacross, lc2], // Replace extra slots with real screenshots
    href: "https://www.lacrossetechnology.com/",
    accent: "#0ab4ff",
  },
  {
    id: 2,
    title: "House Price Predictor",
    tags: ["Flask", "Python", "ML", "Kaggle", "Linear Regression"],
    desc: "A user-friendly ML tool built with Flask and Linear Regression using a Bengaluru housing dataset. Achieves 84%+ accuracy in estimating home values. Built during IBM SkillBuild's 6-week data analytics internship.",
    images: [houe],
    href: "https://www.linkedin.com/posts/ruman-saiyed-4b4646299_introducing-the-house-price-predictor-a-activity-7222435435917000705-_lmS/",
    accent: "#00c6a2",
  },
  {
    id: 3,
    title: "Asthma Care App",
    tags: ["React", "Golang", "fiber", "fullstack", "API"],
    desc: "**AsthmaCare** is a full-stack web application built with **Go (Fiber)** and **PostgreSQL** that helps asthma patients manage their health by providing real-time air quality monitoring, nearby emergency room locator, and evidence-based asthma tips. The app features **JWT authentication**, **Google Maps & Air Quality APIs** for live location-based data, and a responsive frontend with an emergency SOS protocol. Designed to be a complete breathing companion, it empowers users with actionable insights to prevent attacks and respond effectively in emergencies.",
    images: [ac1, ac2, ac3, ac4],
    href: "https://github.com/Ruman2304/Asthma-Clinic",
    accent: "#56cf75",
  },
  {
    id: 4,
    title: "Animation Portfolio",
    tags: ["Blender", "ArtStation", "3D", "Game Art"],
    desc: "A curated gallery of 3D art, game projects, and Blender work showcasing character design, environment art, and animation experiments.",
    images: [anim, ani2],
    href: "https://www.artstation.com/rushan23",
    accent: "#c77dff",
  },
  {
    id: 5,
    title: "Minecraft Speedrun Plugin",
    tags: ["Prolog", "Python", "Flask", "JS", "AI"],
    desc: "A full-stack expert system using SWI-Prolog and Flask to model Minecraft gameplay logic. Features multi-objective planning, resource dependency resolution, hint generation, and a dynamic frontend with real-time API integration.",
    images: [mine],
    href: "https://github.com/Ruman2304/Wampuscraft",
    accent: "#56cf75",
  },
  
   {
    id: 6,
    title: "Job Portal",
    tags: ["PHP", "MySQL", "AJAX", "JS", "CSS"],
    desc: "A comprehensive job portal that connects professionals with career opportunities. Features seamless UX powered by PHP, HTML, CSS, JavaScript, and AJAX — with PHPMyAdmin handling the backend for secure and reliable data management.",
    images: [jp2,jp5, jp3, jp4],
    href: "https://www.linkedin.com/posts/ruman-saiyed-4b4646299_excited-to-announce-the-successful-completion-activity-7193122138315243522--A9f/",
    accent: "#ff6b35",
  },
];

function ImageGallery({ images, accent }) {
  const [active, setActive] = useState(0);

  return (
    <div className="gallery-wrap">
      <div className="gallery-main">
        <img
          src={images[active]}
          alt="project screenshot"
          className="gallery-main-img"
        />
        <div className="gallery-shine" style={{ "--accent": accent }} />
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`thumb-btn ${i === active ? "active" : ""}`}
              style={{ "--accent": accent }}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={img} alt={`thumb ${i + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="card" style={{ "--accent": project.accent }}>
      <ImageGallery images={project.images} accent={project.accent} />
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{project.title}</h3>
          <div className="card-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="card-desc">{project.desc}</p>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          <span>View Project</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function ProjectCards() {
  return (
    <section className="projects-section">
      <div className="section-header">
        <p className="section-eyebrow">Portfolio</p>
        <h1 className="section-title">Projects</h1>
        <div className="title-underline" />
      </div>
      <br></br>
      <div className="cards-container">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

export default ProjectCards;