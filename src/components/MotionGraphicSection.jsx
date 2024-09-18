import React from "react";
import ServicesSection from "./ServicesSection";
import PhotoCorporatePortraits from "./PhotoCorporatePortraits";
import Experience from "./Experience";
import motionImage from "../assets/motion.jpg"; // Imatge de fons per la secció de Motion Graphics
import motionTemplateOne from "../assets/motionTemplateOne.png";
import motionTemplateTwo from "../assets/motionTemplateTwo.jpg";
import motionTemplateThree from "../assets/motionTemplateThree.jpg";
import ContactForm from "./ContactForm";
import conceptIcon from "../assets/concept.png";
import fotoIcon from "../assets/foto.png";
import motionIcon from "../assets/motion.png";
import playIcon from "../assets/play.png";

const MotionGraphicsSection = () => {
  const ImagesCarousel = [motionTemplateOne, motionTemplateTwo, motionTemplateThree];

  return (
    <>
      <div
        className="section-wrapper motion-section"
        style={{
          backgroundImage: `url(${motionImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      >
        <div className="content-wrapper">
          <h1 className="title">Motion Graphics</h1>
          <p className="description">
            Motion Graphics bring life to visual storytelling. Combining animation, design, and
            motion, I create engaging visuals that help communicate complex ideas in a dynamic and
            compelling way. From logo animations to full promotional videos, my goal is to captivate
            and connect with the audience.
          </p>
          <div className="call-to-action">
            <button>more info!</button>
          </div>
        </div>
      </div>

      <ServicesSection />

      <PhotoCorporatePortraits
        title="Motion Graphics Process"
        description={
          <>
            <p>
              Motion Graphics go beyond visuals; they are a way to communicate a story or a brand's
              essence through dynamic, engaging animations. My approach begins with deeply
              understanding the client's message and needs. From concept to execution, I focus on
              creating seamless transitions and impactful storytelling.
            </p>

            <p>
              Each project is built upon attention to detail, ensuring that every animation flows
              naturally and communicates the intended message effectively. It's not just about
              movement, but how that movement connects with the audience.
            </p>

            <p>
              Combining creative visuals with precise timing, I aim to deliver a professional result
              that not only captivates viewers but also communicates the core essence of the brand.
              This process helps to engage, inform, and inspire audiences.
            </p>
          </>
        }
        services={[
          {
            icon: conceptIcon,
            title: "Storyboarding",
            description:
              "The foundation of any animation project, storyboarding allows us to map out the key moments and transitions in the narrative. This phase ensures a coherent and effective flow before we dive into the animation process, helping to foresee potential challenges and refine creative ideas.",
          },
          {
            icon: fotoIcon,
            title: "Animation",
            description:
              "Using industry-leading software, we breathe life into static elements. Every frame is carefully crafted to ensure smooth, engaging animations that align with the storyboard and deliver the intended message in an impactful and visually dynamic way.",
          },
          {
            icon: motionIcon,
            title: "Sound Design",
            description:
              "Sound design plays a crucial role in enhancing the overall impact of the animation. Carefully selected sound effects and music are added to complement the visuals, creating an immersive experience that deepens the viewer's engagement.",
          },
          {
            icon: playIcon,
            title: "Post-Production",
            description:
              "In post-production, the final touches are applied, including color grading, visual effects, and ensuring the animation is optimized for various platforms. This phase guarantees a polished and professional finish, making sure the final product is ready for launch and distribution.",
          },
        ]}
      />

      <Experience title="My experience in motion graphics" images={ImagesCarousel} />

      <div className="contact-section">
        <ContactForm />
      </div>
    </>
  );
};

export default MotionGraphicsSection;
