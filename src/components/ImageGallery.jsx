import React, { useRef } from "react";
import crudeVideo from "../assets/crude.mp4"; // Importa el vídeo

const CrudeSection = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <section className="crude-section">
      <div className="crude-video-container">
        <video
          className="crude-video"
          ref={videoRef}
          src={crudeVideo}
          controls
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="crude-text">
        <h2 className="crude-title">Digital Composition & VFX</h2>
        <p className="crude-description">
          Collaboration for a prestigious interior design studio based in Barcelona.<br></br>In
          Crude’s studio they believe that spaces also influence people's quality of life. Their
          work is handmade and original. The projects are characterized by transmitting an
          atmosphere of serenity, austerity, and timelessness.<br></br><br></br>
          Company: Crude<br></br>
          Software: Adobe After Effects
        </p>
      </div>
    </section>
  );
};

export default CrudeSection;
