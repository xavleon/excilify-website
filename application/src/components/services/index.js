import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  SectionDivider
} from "./ServicesElements";
import Icon1 from "../../images/space.svg";
import Icon2 from "../../images/online.svg";
import Icon3 from "../../images/real-time.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <SectionDivider />
      <ServicesH1>Our Expertise</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Brand Design & Identity</ServicesH2>
          <ServicesP>
            We create eye-catching brand looks that help you stand out from competitors. This includes designing your logo, choosing your colors, creating your message, and building all the visuals that make your business instantly recognizable.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Online Marketing That Works</ServicesH2>
          <ServicesP>
            We help more customers find you online using proven marketing techniques. This includes improving your Google rankings, creating engaging content, running targeted ads, managing social media, and building email campaigns that bring real results.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Modern Websites & Apps</ServicesH2>
          <ServicesP>
            We build fast, user-friendly websites and apps that look great on any device. Whether you need an online store, a business website, or a custom app, we create reliable digital solutions that grow with your business and keep your information secure.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
