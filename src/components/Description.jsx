import React from "react";
import fannyImage from "../assets/fanny.jpg";
import pulseraImage from "../assets/pulsera.jpg";
import sheiImage from "../assets/shei_arrecada.jpg";

const Description = () => {
  return (
    <>
      <div className="image-gallery">
        <img className="gallery-image" src={fannyImage} alt="Fanny" />
        <img className="gallery-image" src={pulseraImage} alt="Pulsera" />
        <img className="gallery-image" src={sheiImage} alt="Shei Arrecada" />
      </div>
      <div className="description-section">
        <p className="description-text">
          WORK ON PORTRAIT PHOTOGRAPHY AND LOW SATURATION, YEAH YOU WILL FIND ME HERE
          <br />
          <span className="description-emphasis">
            *adding a good editing work with photoshop, always looking for naturalness
          </span>
        </p>
      </div>
    </>
  );
};

export default Description;
