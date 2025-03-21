import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const ApproachContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 80px;
  background: linear-gradient(180deg, #080808 0%, #121212 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    background-color: rgba(255, 215, 0, 0.03);
    top: 15%;
    right: 10%;
    border-radius: 8px;
    transform: rotate(-10deg);
    z-index: 0;
  }
  
  &::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    background-color: rgba(255, 215, 0, 0.05);
    bottom: 15%;
    left: 5%;
    border-radius: 8px;
    transform: rotate(15deg);
    z-index: 0;
  }
`;

const YellowAccent = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: rgba(255, 215, 0, 0.08);
  border-radius: 8px;
  z-index: 0;
  
  &.accent-1 {
    top: 20%;
    left: 15%;
    transform: rotate(20deg);
  }
  
  &.accent-2 {
    bottom: 20%;
    right: 15%;
    transform: rotate(-15deg);
  }
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  position: relative;
  text-align: center;
  letter-spacing: -0.5px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #FFD700;
    border-radius: 2px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: #FFD700;
    border-radius: 2px;
  }
`;

const Subtitle = styled.h5`
  color: #FFD700;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: center;
`;

const ContentText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const StepContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border-left: 3px solid #FFD700;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background-color: #FFD700;
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.7;
`;

const ApproachSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ApproachContainer>
      <YellowAccent className="accent-1" />
      <YellowAccent className="accent-2" />
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <Subtitle>Our Methodology</Subtitle>
            <PageTitle>The Excilify Approach</PageTitle>
            <ContentText className="text-center mb-5">
              At Excilify, we follow a proven, systematic approach to deliver outstanding digital solutions that drive real results for your business. Our methodology combines strategic thinking, technical expertise, and creative innovation to create websites and digital experiences that outperform the competition.
            </ContentText>
          </Col>
        </Row>
        
        <Row className="my-5">
          <Col lg={12}>
            <SectionTitle>Our Development Process</SectionTitle>
            <ContentText>
              Our development process is built on years of experience working with businesses of all sizes across multiple industries. We've refined our approach to ensure every project is delivered on time, on budget, and exceeds expectations.
            </ContentText>
          </Col>
        </Row>
        
        <Row>
          <Col lg={6} md={6} className="mb-4">
            <StepContainer>
              <StepNumber>1</StepNumber>
              <StepTitle>Discovery & Strategy</StepTitle>
              <StepDescription>
                We begin by understanding your business, goals, target audience, and challenges. Through in-depth discussions and research, we develop a comprehensive strategy that aligns your digital presence with your business objectives.
              </StepDescription>
            </StepContainer>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <StepContainer>
              <StepNumber>2</StepNumber>
              <StepTitle>Planning & Architecture</StepTitle>
              <StepDescription>
                We create detailed wireframes, sitemaps, and technical specifications to blueprint your digital solution. This phase establishes the foundation for a successful project by defining scope, timeline, and technical requirements.
              </StepDescription>
            </StepContainer>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <StepContainer>
              <StepNumber>3</StepNumber>
              <StepTitle>Design & User Experience</StepTitle>
              <StepDescription>
                Our designers craft visually compelling interfaces that reflect your brand while ensuring optimal user experience. We focus on creating intuitive navigation, clear calls-to-action, and engaging visual elements that convert visitors into customers.
              </StepDescription>
            </StepContainer>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <StepContainer>
              <StepNumber>4</StepNumber>
              <StepTitle>Development & Integration</StepTitle>
              <StepDescription>
                Our development team brings designs to life using clean, efficient code and best practices. We build responsive, fast-loading websites optimized for all devices and integrate necessary functionality such as CMS, e-commerce, or custom applications.
              </StepDescription>
            </StepContainer>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <StepContainer>
              <StepNumber>5</StepNumber>
              <StepTitle>Testing & Quality Assurance</StepTitle>
              <StepDescription>
                We rigorously test every aspect of your website or application across multiple devices, browsers, and scenarios. Our comprehensive QA process ensures your digital solution is bug-free, secure, and delivers a flawless user experience.
              </StepDescription>
            </StepContainer>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <StepContainer>
              <StepNumber>6</StepNumber>
              <StepTitle>Launch & Optimization</StepTitle>
              <StepDescription>
                We carefully manage the deployment process to ensure a smooth launch. After going live, we monitor performance, gather user feedback, and make optimization adjustments to maximize conversions and achieve your business goals.
              </StepDescription>
            </StepContainer>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={12}>
            <SectionTitle>Our Core Principles</SectionTitle>
            <ContentText>
              These fundamental values guide our work and ensure we consistently deliver exceptional results for our clients:
            </ContentText>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <StepContainer>
              <StepTitle>Results-Driven Approach</StepTitle>
              <StepDescription>
                We focus on delivering measurable outcomes that directly impact your business growth, whether that's increased traffic, higher conversion rates, or improved customer engagement.
              </StepDescription>
            </StepContainer>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <StepContainer>
              <StepTitle>User-Centered Design</StepTitle>
              <StepDescription>
                We prioritize the needs and experiences of your users in every decision, creating intuitive interfaces that guide visitors toward conversion while providing an enjoyable experience.
              </StepDescription>
            </StepContainer>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <StepContainer>
              <StepTitle>Technical Excellence</StepTitle>
              <StepDescription>
                We maintain the highest standards of code quality, performance optimization, and technical best practices to ensure your digital solutions are fast, reliable, and future-proof.
              </StepDescription>
            </StepContainer>
          </Col>
        </Row>
      </Container>
    </ApproachContainer>
  );
};

export default ApproachSection; 