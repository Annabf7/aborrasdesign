import React from "react";
import sheiImage from "../assets/shei.jpg";

const ShowreelSection = () => {
  return (
    <div className="showreel-container">
      <div className="image-container">
        <img className="showreel-image" src={sheiImage} alt="Showreel preview" />
      </div>
      <div className="text-container">
        <h1>
          MULTIMEDIA FREELANCE <br></br> FROM BARCELONA
        </h1>
        <p>
          Have a look to my{" "}
          <a href="https://youtu.be/RwoYe5Lw_s0" target="_blank" rel="noopener noreferrer">
            showreel
          </a>{" "}
          and feel free to comment!
        </p>
      </div>
    </div>
  );
};

export default ShowreelSection;
