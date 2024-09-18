import React, { useRef } from "react";
import animationVideo from "../assets/animacio.mp4"; // Importa el vídeo

const AnimationProject = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <div className="project-container">
      <div className="project-text">
        <h2 className="project-title">Animation + values</h2>
        <p className="project-description">
          In this animation project, I was involved with the sports values. <br />
          The final message was, players, coaches, and supporters are all in the same boat and they
          must respect each other. <br />
          <br />
          Organization: F.C. de Bàsquet <br />
          Software: Adobe After Effects
        </p>
      </div>
      <div className="project-video-container">
        <video
          className="project-video"
          ref={videoRef}
          src={animationVideo}
          controls
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default AnimationProject;
