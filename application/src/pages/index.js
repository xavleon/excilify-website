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
        subtitle="Expert Web Development"
        title="Innovative Solutions for Modern Businesses"
        text="We craft high-performance websites and applications that drive results. Our expert team combines cutting-edge technology with strategic design to deliver solutions that are fast, responsive, and scalable. From startups to enterprises, we create digital experiences that help you outperform the competition."
        btnText="Our Approach"
      />
      <ShowcaseSection />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Creative Design & UX"
        title="Captivating Experiences That Convert"
        text="Our design philosophy blends aesthetics with functionality to create intuitive user experiences. We focus on creating websites that not only look exceptional but also drive engagement and conversions. Every design element is strategically implemented to enhance your brand's digital presence and achieve your business goals."
        btnText="View Portfolio"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="marketing"
        subtitle="Strategic Digital Marketing"
        title="Data-Driven Campaigns That Deliver Results"
        text="Elevate your online presence with our comprehensive digital marketing solutions. We develop tailored strategies across SEO, content marketing, social media, and paid advertising to increase your visibility and drive qualified traffic. Our analytical approach ensures continuous optimization for maximum ROI on your marketing investment."
        btnText="Marketing Services"
      />
      <Footer />
    </>
  );
};
