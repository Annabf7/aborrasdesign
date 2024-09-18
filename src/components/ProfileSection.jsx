import React from "react";
import barcelonaImage from "../assets/barcelona.png";
import helloIcon from "../assets/hello.png";

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-text">
        <h1 className="profile-title">
          LOGIC WILL GET YOU FROM A TO Z;<br></br> IMAGINATION WILL GET YOU EVERYWHERE
        </h1>{" "}
        <p>
          <img src={helloIcon} alt="Hello icon" className="hello-icon" /> it's me, Anna, from
          Barcelona. <br></br>My areas of interest in the multimedia business are Digital
          Composition + VFX, Animation, Production and Post-production video, Portrait photography,
          I also enjoy the process of color correction that is behind each of my works.<br></br> I
          am in charge of the entire process: Inspiration, Investigation, Ideation, Execution.
        </p>
      </div>
      <img className="profile-icon" src={barcelonaImage} alt="Profile Icon" />
    </div>
  );
};

export default ProfileSection;
