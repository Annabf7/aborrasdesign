import React from "react";
import ServicesSection from "./ServicesSection";
import PhotoCorporatePortraits from "./PhotoCorporatePortraits";
import Experience from "./Experience";
import frontendImage from "../assets/website.jpg";
import webTemplateOne from "../assets/webTemplateOne.jpg";
import webTemplateTwo from "../assets/webTemplateTwo.jpg";
import webTemplateThree from "../assets/webTemplateThree.jpg";
import ContactForm from "./ContactForm";
import conceptIcon from "../assets/concept.png";
import fotoIcon from "../assets/foto.png";
import motionIcon from "../assets/motion.png";
import playIcon from "../assets/play.png";

const services = [
  {
    icon: conceptIcon,
    title: "Prototyping",
    description:
      "Wireframing, visual mockups, and prototypes allow us to visualize the project's structure early. This step helps identify potential issues, refine design ideas, and ensure we meet the client's vision before any coding begins.",
  },
  {
    icon: fotoIcon,
    title: "UI/UX Design",
    description:
      "User-centric design focuses on delivering an intuitive and seamless experience. We prioritize ease of navigation and interaction, ensuring that every user enjoys a smooth journey through the website, enhancing engagement and satisfaction.",
  },
  {
    icon: motionIcon,
    title: "Development",
    description:
      "Our clean code ensures optimal performance, compatibility across devices, and easy maintenance. We focus on responsive design and smooth interactivity, ensuring the site runs efficiently on any platform and browser.",
  },
  {
    icon: playIcon,
    title: "Launch & Maintenance",
    description:
      "Post-launch, we provide ongoing support to ensure the site remains up-to-date and runs smoothly. Regular updates, performance checks, and new feature integrations ensure long-term success and user engagement.",
  },
];

const WebFrontEndSection = () => {
  const ImagesCarousel = [webTemplateOne, webTemplateTwo, webTemplateThree];

  return (
    <>
      <div
        className="section-wrapper frontend-section"
        style={{
          backgroundImage: `url(${frontendImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
        }}
      >
        <div className="content-wrapper">
          <h1 className="title">Front-end Web Development</h1>
          <p className="description">
            Front-end development is crucial for delivering visually appealing, responsive, and
            user-friendly websites...
          </p>
          <div className="call-to-action">
            <button>more info!</button>
          </div>
        </div>
      </div>

      <ServicesSection />

      <PhotoCorporatePortraits
        title="Web Design & Development Process"
        description={
          <>
            <p>
              Creating efficient, clean, and modern websites is my passion. My approach involves
              understanding client needs in-depth, ensuring that every design decision is tailored
              to their specific objectives.
            </p>
            <p>
              From the initial concept to the final product, I believe in a collaborative process
              that emphasizes both creativity and functionality.
            </p>
            <p>
              This comprehensive approach ensures that each project not only meets but exceeds
              expectations. Below are the main steps I follow for every project, ensuring a seamless
              journey from brainstorming to launch.
            </p>
          </>
        }
        services={services}
      />

      <Experience title="My experience in web development" images={ImagesCarousel} />
      <div className="contact-section">
        <ContactForm />
      </div>
    </>
  );
};

export default WebFrontEndSection;
