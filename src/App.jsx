import { useState, useEffect } from "react";

import ScrollRumanSaiyed from "./rumansaiyed.jsx";
import ProjectCards from "./Dives.jsx";
import Experiencecards from "./experience.jsx";
import SprayCursor from "./spraycursor.jsx";
import ResumeSection from "./resume.jsx";
import InfoSection from "./infosection.jsx";
import ContactPage from "./contact.jsx";
import Education from "./edu.jsx";


function App() {
  

  return (
    <>
      
        <SprayCursor />
        <ScrollRumanSaiyed />
        <ProjectCards />
        <Experiencecards />
        <Education/>
        <InfoSection/>
        <ResumeSection/>
        <ContactPage/>
       
        
      
    </>
  );
}

export default App;
