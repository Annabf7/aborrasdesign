import React from "react";
import { Link, useLocation } from "react-router-dom";
import photoIcon from "../assets/foto.png";
import webFrontendIcon from "../assets/webfrontend.png";
import motionIcon from "../assets/motion.png";

const servicesData = [
  {
    iconSrc: photoIcon,
    title: "Digital Photography",
    className: "digitalPhotography",
    path: "/photography", 
  },
  {
    iconSrc: webFrontendIcon,
    title: "Web frontEnd",
    className: "",
    path: "/webfrontend", 
  },
  {
    iconSrc: motionIcon,
    title: "Motion Graphic",
    className: "branding",
    path: "/motiongraphic", 
  },
];

const ServicesSection = () => {
  const location = useLocation(); // Obtenir la ubicació actual

  return (
    <section className="servicesIcons">
      {servicesData.map((service, index) => (
        <Link to={service.path} key={index}>
          <div
            className={`serviceItem ${service.className} ${
              location.pathname === service.path ? "active" : ""
            }`}
          >
            <img
              loading="lazy"
              src={service.iconSrc}
              alt={service.title}
              className={`serviceIcon ${location.pathname === service.path ? "activeIcon" : ""}`} // Classe condicional per la icona activa
            />
            <h3 className="serviceTitle">{service.title}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ServicesSection;
