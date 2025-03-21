import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { 
  InfoContainer, 
  InfoWrapper, 
  Subtitle, 
  Title, 
  TextWrapper, 
  Description, 
  ImageWrapper,
  SectionDivider,
  YellowSquareAccent,
  CircleAccent
} from "./infoElements";
import { PremiumLightButton } from "../ButtonElements";

export const InfoSectionLight = ({
  id,
  title,
  subtitle,
  text,
  image,
  btnText,
}) => {
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
            <div className="col-lg-6 col-sm-12">
              <ImageWrapper>
                <img src={image} alt="" className="fit-img" />
              </ImageWrapper>
            </div>
            <div className="col-lg-6 col-sm-12 my-auto">
              <TextWrapper>
                <Subtitle>{subtitle}</Subtitle>
                <Title>{title}</Title>
                <Description>{text}</Description>
                <PremiumLightButton 
                  to={id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {btnText}
                </PremiumLightButton>
              </TextWrapper>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSectionLight;
