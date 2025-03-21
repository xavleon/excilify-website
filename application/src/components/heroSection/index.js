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
        <p className="hero-description">Custom web solutions and strategic marketing to elevate your brand and drive growth</p>
        <HeroSubTitle>
          <span>DEVELOP</span>
          <span>·</span>
          <span>MARKET</span>
          <span>·</span>
          <span>GROW</span>
        </HeroSubTitle>
        <HeroBtnWrapper>
          <PhoneCallButton
            href="tel:+1234567890" // Replace with your actual phone number
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
