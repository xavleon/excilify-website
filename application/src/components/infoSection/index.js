import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Link } from "react-router-dom";
import { 
  InfoContainer, 
  InfoWrapper, 
  Subtitle, 
  Title, 
  TextWrapper, 
  InfoText, 
  SectionDivider, 
  BottomDivider,
  YellowSquareAccent,
  CircleAccent,
  ImageContainer
} from "./InfoElements";
import { PremiumButton } from "../ButtonElements";

export const InfoSection = ({ id, title, subtitle, text, image, btnText, buttonLink }) => {
  return (
    <>
      <InfoContainer id={id}>
        <SectionDivider />
        <YellowSquareAccent className="top-left" />
        <YellowSquareAccent className="bottom-right" />
        <CircleAccent className="top-right" />
        <CircleAccent className="bottom-left" />
        <InfoWrapper>
          <div className="row expand-row gx-5">
            <div className="col-lg-6 col-sm-12 my-auto">
              <TextWrapper>
                <Subtitle>{subtitle}</Subtitle>
                <Title className="text-white">{title}</Title>
                <InfoText>{text}</InfoText>
                {buttonLink ? (
                  <Link to={buttonLink} style={{ textDecoration: 'none' }}>
                    <PremiumButton as="div">
                      {btnText}
                    </PremiumButton>
                  </Link>
                ) : (
                  <PremiumButton 
                    to={id} 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {btnText}
                  </PremiumButton>
                )}
              </TextWrapper>
            </div>
            <div className="col-lg-6 col-sm-12 img-wrap">
              <ImageContainer>
                <img src={image} alt="" className="fit-img" />
              </ImageContainer>
            </div>
          </div>
        </InfoWrapper>
        <BottomDivider />
      </InfoContainer>
    </>
  );
};

export default InfoSection;
