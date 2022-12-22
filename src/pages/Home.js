import React from "react";
import Header from "../components/header/Header";
import AboutSection from "../components/about/AboutSection";
import ExperienceSection from "../components/experience/ExperienceSecion";
import ProjectSection from "../components/Projects/ProjectSection";
import CtaSection from "../components/cta/CtaSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <CtaSection />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
