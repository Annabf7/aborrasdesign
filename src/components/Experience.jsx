import React from "react";
import Carousel from "./Carousel";

const Experience = ({ title, images }) => {
  return (
    <section className="experience-container">
      <header className="experience-header">
        <h2>{title}</h2>
      </header>
      <main>
        <Carousel images={images} />
      </main>
    </section>
  );
};

export default Experience;
