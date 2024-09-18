import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";
import ShowreelImage from "./components/ShowreelImage";
import AnimationProject from "./components/AnimationProject";
import ImageGallery from "./components/ImageGallery";
import Description from "./components/Description";
import ProfileSection from "./components/ProfileSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import PhotographySection from "./components/PhotographySection";
import WebFrontEndSection from "./components/WebFrontEndSection";
import MotionGraphicSection from "./components/MotionGraphicSection";


import "./App.css";

function App() {
  return (
    <Router>
      <NavigationMenu />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ShowreelImage />
              <AnimationProject />
              <ImageGallery />
              <Description />
              <ProfileSection />
            </div>
          }
        />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/photography" element={<PhotographySection />} />
        <Route path="/webfrontend" element={<WebFrontEndSection />} />
        <Route path="/motiongraphic" element={<MotionGraphicSection />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
