import React from "react";
import ServicesSection from "./ServicesSection";
import PhotoCorporatePortraits from "./PhotoCorporatePortraits";
import Experience from "./Experience";
import womenOne from "../assets/womenOne.jpg";
import womenTwo from "../assets/womenTwo.jpg";
import womenThree from "../assets/womenThree.png";
import ContactForm from "./ContactForm";
import conceptIcon from "../assets/concept.png";
import fotoIcon from "../assets/foto.png";
import motionIcon from "../assets/motion.png";
import playIcon from "../assets/play.png";

const services = [
  {
    icon: conceptIcon,
    title: "Conceptualization",
    description:
      "The process starts with brainstorming and defining the project’s core message. This phase involves detailed discussions to ensure the concept aligns perfectly with the client's vision and goals, laying the foundation for impactful visuals.",
  },
  {
    icon: fotoIcon,
    title: "Quality Shooting",
    description:
      "Capturing high-quality visuals is essential. Whether working with live-action footage or generating assets, we ensure everything is shot and produced with precision, ensuring that each frame delivers maximum impact and clarity.",
  },
  {
    icon: motionIcon,
    title: "Professional Edition",
    description:
      "Editing transforms raw material into a cohesive narrative. This step involves assembling the footage, applying special effects, and fine-tuning the motion to create a fluid, dynamic piece that communicates the intended message effectively.",
  },
  {
    icon: playIcon,
    title: "Final Result",
    description:
      "The project concludes with a polished, professional product that’s ready for distribution. We ensure every detail is perfected, from sound design to color grading, delivering a final result that captivates the audience and achieves its purpose.",
  },
];

const PhotographySection = () => {
  const ImagesCarousel = [womenOne, womenTwo, womenThree];

  return (
    <>
      <div className="section-wrapper photography-section">
        <div className="hero-image"></div>
        <div className="content-wrapper">
          <h1 className="title">Digital Photography</h1>
          <p className="description">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
          </p>
          <div className="call-to-action">
            <button>more info!</button>
          </div>
        </div>
      </div>
      <ServicesSection />
      <PhotoCorporatePortraits
        title="Photo - corporate & PORTRAITS!"
        description={
          <>
            <p>
              ContactForm The images must be a means of communication, which, captured with
              sensitivity, will help to transmit the values ​​and culture of the brand. You can
              create the best website, app or communication campaign, but without good images to
              accompany the project, we will end up halfway.
            </p>
            <p>
              {" "}
              My way of working: close, quality, and flexible, guarantees me to achieve results that
              connect with people, where every moment will be portrayed to achieve an attractive and
              inspiring result for my clients. My other passion is portrait photography with low
              saturations, you can take a look on my social networks!
            </p>
          </>
        }
        services={services}
      />
      <Experience title="My experience in photography" images={ImagesCarousel} />
      <ContactForm />
    </>
  );
};

export default PhotographySection;
