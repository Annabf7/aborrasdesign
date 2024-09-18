import React from "react";
import "../App.css";
import "../index";

function AboutContent() {
  return (
    <div className="about-section">
      <div className="about-description-wrapper">
        <h1 className="about-title">About aborrasdesign</h1>
        <p className="about-description">
          To be an independent artist is to be an entrepreneur. It is someone who constantly risks
          everything they have, and they always bring something new with their proposals.
        </p>
        <p className="about-maintext">
          My career as an artist began when I was very young. The tool I used then is the same as
          now: CREATIVITY. The only difference is that we used different materials, such as paper,
          brushes, and paints. I wanted to change the course of my career.
          <br />I had a strong interest in digital art, fascinated by the incredible creations that
          could only be achieved with the software available today. And that’s where my journey
          began, seven years ago. As a freelancer, I understand the importance of meeting deadlines
          and delivering high-quality results.
        </p>

        <blockquote className="quote">
          «Choose a job you love, and you will never have to work a day in your life»
        </blockquote>
      </div>
      <div className="services-wrapper">
        <h3>Services</h3>
        <ul className="services-list">
          <li>Creative Direction</li>
          <li>Digital photography</li>
          <li>Digital composition</li>
          <li>UX design</li>
          <li>Animation / Broadcasting</li>
          <li>Video: Pro & postproduction</li>
          <li>Branding</li>
        </ul>
        <h3>Software</h3>
        <ul className="software-list">
          <li>Adobe After Effects</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Premiere</li>
          <li>Adobe Indesign</li>
          <li>Figma</li>
        </ul>
        <h3>Social Media</h3>
        <ul className="social-list">
          <li>Malt</li>
          <li>Instagram</li>
          <li>Airbnb</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutContent;
