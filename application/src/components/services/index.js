import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../images/space.svg";
import Icon2 from "../../images/online.svg";
import Icon3 from "../../images/real-time.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Creative Brand Design</ServicesH2>
          <ServicesP>
            Whether you're starting fresh or looking to rebrand, we craft logos,
            color palettes, and visual elements that resonate with your
            audience.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Digital Marketing Mastery</ServicesH2>
          <ServicesP>
            Boost your online presence with marketing strategies. From SEO to
            social media campaigns, we ensure your brand reaches the right
            audience effectively.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Cutting-Edge Web Development</ServicesH2>
          <ServicesP>
            Build fast, responsive, and feature-rich websites with the latest
            technologies. We follow modern best practices to enhance user
            experience.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
