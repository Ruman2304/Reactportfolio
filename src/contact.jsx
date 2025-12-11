// ContactPage.jsx
import React from "react";
import "./contact.css";
import bgImg from "./assets/ruman1.png";

export default function ContactPage() {
  return (
    <section className="contact-section"  style={{ backgroundImage: `url(${bgImg})`}}>
      <div className="contact-content">

        <h1 className="contact-title">CONTACT</h1>

        <div className="contact-links">

          <a href="#projects" className="contact-btn">Projects</a>

          <a href="https://github.com/Ruman2304" 
             target="_blank" 
             className="contact-btn">
            GitHub
          </a>

          <a href="https://leetcode.com/u/Ruman2304/" 
             target="_blank" 
             className="contact-btn">
            LeetCode
          </a>

          <a href="https://www.linkedin.com/in/ruman-saiyed-4b4646299/" 
             target="_blank" 
             className="contact-btn">
            LinkedIn
          </a>
          

          <a href="https://www.youtube.com/@VibeGTA0049" 
             target="_blank" 
             className="contact-btn">
            YouTube
          </a>

        </div>
         <span className="rightsreserved1">rumansaiyed2304@gmail.com</span>
     
        <span className="rightsreserved1">© {new Date().getFullYear()} Ruman Saiyed</span>

      </div>
    </section>
  );
}
