import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";
import ShowcaseSection from "../components/showCaseSection";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="Digital Innovation for Your Success"
        title="cutting-edge web development services, tailored to your needs."
        text="Whether you're building a stunning portfolio, an e-commerce platform, or a dynamic web application, our team of expert developers delivers modern, scalable, and user-friendly solutions. Let us help you create the digital presence your business deserves."
        btnText="Get Started Now"
      />
      <ShowcaseSection />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Transforming Ideas Into Digital Reality"
        title="stunning websites and seamless user experiences."
        text="From concept to launch, we specialize in creating modern, responsive, and visually appealing websites. Our team ensures that your digital presence not only looks amazing but also performs flawlessly. Let’s bring your vision to life with cutting-edge technology and innovative designs."
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Elevate Your Brand Identity"
        title="Strengthen your media presence with innovative strategies and fresh designs."
        text="Whether you’re looking to rebrand or establish a strong digital footprint, we specialize in creating impactful media marketing campaigns and brand strategies. From social media optimization to a complete visual rebranding, our solutions are tailored to set your business apart and connect with your audience like never before."
        btnText="Discover Our Solutions"
      />
      <Footer />
    </>
  );
};
