// ShowcaseSection.js
import React from "react";
import styled from "styled-components";

const SectionDivider = styled.div`
  height: 120px;
  width: 100%;
  background: linear-gradient(to bottom, transparent, #0c0c0c);
  position: absolute;
  top: -120px;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

const ShowcaseSectionWrapper = styled.section`
  padding: 6rem 1rem;
  background: linear-gradient(to bottom, #0c0c0c 0%, #080808 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.03), transparent 70%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: center;
  color: #ffffff;
  position: relative;
  letter-spacing: -0.5px;

  span {
    color: #FFD700;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #FFD700;
      opacity: 0.4;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #222222;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 380px;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 215, 0, 0.1);
  }
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 30%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.1) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  transition: background 0.3s ease;

  ${Card}:hover & {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.8) 40%,
      rgba(0, 0, 0, 0.6) 70%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
`;

const OverlayContent = styled.div`
  transform: translateY(20px);
  opacity: 0.9;
  transition: transform 0.4s ease, opacity 0.4s ease;

  ${Card}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ProjectType = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #FFD700;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #ffffff;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.25rem;
`;

const StyledButton = styled.button`
  border: none;
  background: rgba(255, 215, 0, 0.1);
  color: #FFD700;
  padding: 0.6rem 1.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 215, 0, 0.3);

  &:hover {
    background: #FFD700;
    color: #000;
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  }
`;

const ShowcaseSection = () => {
  // Realistic project description data
  const projects = [
    {
      type: "E-Commerce",
      title: "Luxury Fashion Boutique",
      description: "A premium shopping experience with custom product configurator and personalized recommendations",
      image: "linear-gradient(45deg, #4a00e0, #8e2de2)"
    },
    {
      type: "Web Application",
      title: "Financial Dashboard",
      description: "Real-time analytics platform with interactive data visualization and predictive insights",
      image: "linear-gradient(45deg, #141e30, #243b55)"
    },
    {
      type: "Brand Website",
      title: "Culinary Experience",
      description: "Immersive website for a high-end restaurant with online reservation and virtual tour",
      image: "linear-gradient(45deg, #3a6186, #89253e)"
    }
  ];

  return (
    <ShowcaseSectionWrapper>
      <SectionDivider />
      <Container>
        <Title>
          Our <span>Featured</span> Work
        </Title>
        <Grid>
          {projects.map((project, index) => (
            <Card key={index}>
              <StyledImage style={{ background: project.image }} />
              <Overlay>
                <OverlayContent>
                  <ProjectType>{project.type}</ProjectType>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <StyledButton>View Project</StyledButton>
                </OverlayContent>
              </Overlay>
            </Card>
          ))}
        </Grid>
      </Container>
    </ShowcaseSectionWrapper>
  );
};

export default ShowcaseSection;
