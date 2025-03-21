import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  HeroSubTitle,
} from "./HeroElements";
import { PhoneCallButton } from "../ButtonElements";
import { FaPhone } from 'react-icons/fa';
import Video from "../../videos/bgvideo.mp4";
import "../../App.css";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <h1 className="h1-hero">Transform Your Digital Presence</h1>
        <p className="hero-description">Web solutions that grow with your business</p>
        <HeroSubTitle>
          <span>WEBSITES</span>
          <span>·</span>
          <span>MARKETING</span>
          <span>·</span>
          <span>RESULTS</span>
        </HeroSubTitle>
        <HeroBtnWrapper>
          <PhoneCallButton
            href="tel:+19178600115" // Replace with your actual phone number
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Schedule a Consultation <FaPhone style={{ marginLeft: '8px', fontSize: '14px' }} />
          </PhoneCallButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
