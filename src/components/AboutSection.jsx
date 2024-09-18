import React from "react";
import AboutContent from "./AboutContent";

import "../App.css"; // Import dels estils globals

function AboutSection() {
  return (
    <section className="about-section">
      <div className="content-wrapper">
        <AboutContent />
      </div>
    </section>
  );
}

export default AboutSection;
