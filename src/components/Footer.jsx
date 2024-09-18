import React from "react";
import logoFooter from "../assets/logo_footer.png";
import instagramIcon from "../assets/instagram.png";
import maltIcon from "../assets/malt.png";
import airbnbIcon from "../assets/airbnb.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerWidth">
        <div className="footer-left">
          <h3>aborrasdesign.com</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/aborrasdesign/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.malt.es/dashboard/freelancer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={maltIcon} alt="Malt" />
            </a>
            <a
              href="https://www.airbnb.es/s/Barcelona--Espa%C3%B1a/experiences?tab_id=experience_tab&checkin=2023-04-21&checkout=2023-04-23&refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A435"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={airbnbIcon} alt="Airbnb" />
            </a>
          </div>
        </div>

        <div className="footer-center">
          <img className="footer-logo" src={logoFooter} alt="Footer Logo" />
        </div>

        <div className="footer-right">
          <p className="contact-text">
            If you liked my work, <br></br>introduce me to your project!<br></br>
            <a className="contact-email" href="mailto:aborrasdesign@gmail.com">
              aborrasdesign@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
