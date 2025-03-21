import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const MarketingContainer = styled.div`
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

const ServiceContainer = styled.div`
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

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 215, 0, 0.1);
  color: #FFD700;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.7;
`;

const BenefitItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const BenefitIcon = styled.div`
  min-width: 24px;
  height: 24px;
  background-color: rgba(255, 215, 0, 0.2);
  border-radius: 50%;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '✓';
    color: #FFD700;
    font-size: 14px;
    font-weight: bold;
  }
`;

const BenefitText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const MarketingSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MarketingContainer>
      <YellowAccent className="accent-1" />
      <YellowAccent className="accent-2" />
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <Subtitle>Grow Your Business</Subtitle>
            <PageTitle>Marketing Services</PageTitle>
            <ContentText className="text-center mb-5">
              At Excilify, we provide comprehensive marketing solutions designed to elevate your brand, attract qualified leads, and drive measurable business growth. Our data-driven strategies are tailored to your unique business goals and target audience.
            </ContentText>
          </Col>
        </Row>
        
        <Row className="my-5">
          <Col lg={12}>
            <SectionTitle>Our Marketing Solutions</SectionTitle>
            <ContentText>
              We offer a full suite of digital marketing services to help your business thrive in today's competitive landscape. Each service is strategically implemented to maximize your ROI and achieve sustainable growth.
            </ContentText>
          </Col>
        </Row>
        
        <Row>
          <Col lg={6} md={6} className="mb-4">
            <ServiceContainer>
              <ServiceIcon>🔍</ServiceIcon>
              <ServiceTitle>Search Engine Optimization (SEO)</ServiceTitle>
              <ServiceDescription>
                Increase your organic visibility and drive qualified traffic to your website through our comprehensive SEO services. We optimize your site structure, content, and technical elements to achieve higher rankings on search engines.
              </ServiceDescription>
            </ServiceContainer>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <ServiceContainer>
              <ServiceIcon>📊</ServiceIcon>
              <ServiceTitle>Pay-Per-Click Advertising (PPC)</ServiceTitle>
              <ServiceDescription>
                Generate immediate results with targeted PPC campaigns across Google, Bing, and social platforms. Our experts create and optimize campaigns that deliver the right message to the right audience at the right time.
              </ServiceDescription>
            </ServiceContainer>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <ServiceContainer>
              <ServiceIcon>📱</ServiceIcon>
              <ServiceTitle>Social Media Marketing</ServiceTitle>
              <ServiceDescription>
                Build brand awareness, engage with your audience, and drive conversions through strategic social media marketing. We develop custom strategies for each platform relevant to your business and target audience.
              </ServiceDescription>
            </ServiceContainer>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <ServiceContainer>
              <ServiceIcon>✉️</ServiceIcon>
              <ServiceTitle>Email Marketing</ServiceTitle>
              <ServiceDescription>
                Nurture leads and strengthen customer relationships with targeted email campaigns. We create personalized, automated email sequences that deliver valuable content and drive conversions.
              </ServiceDescription>
            </ServiceContainer>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <ServiceContainer>
              <ServiceIcon>📝</ServiceIcon>
              <ServiceTitle>Content Marketing</ServiceTitle>
              <ServiceDescription>
                Establish your brand as an industry authority with high-quality, engaging content. Our content strategies are designed to attract, educate, and convert your target audience through blogs, videos, infographics, and more.
              </ServiceDescription>
            </ServiceContainer>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <ServiceContainer>
              <ServiceIcon>📈</ServiceIcon>
              <ServiceTitle>Analytics & Reporting</ServiceTitle>
              <ServiceDescription>
                Gain valuable insights into your marketing performance with comprehensive analytics and reporting. We track key metrics, identify opportunities for improvement, and provide actionable recommendations.
              </ServiceDescription>
            </ServiceContainer>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={12}>
            <SectionTitle>Why Choose Our Marketing Services</SectionTitle>
            <ContentText>
              Partner with Excilify for marketing services that deliver real, measurable results:
            </ContentText>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <BenefitItem>
              <BenefitIcon />
              <BenefitText>
                <strong>Data-Driven Approach:</strong> All strategies are based on thorough market research and data analysis.
              </BenefitText>
            </BenefitItem>
            
            <BenefitItem>
              <BenefitIcon />
              <BenefitText>
                <strong>Customized Solutions:</strong> Tailored marketing plans that align with your specific business goals.
              </BenefitText>
            </BenefitItem>
            
            <BenefitItem>
              <BenefitIcon />
              <BenefitText>
                <strong>Transparent Reporting:</strong> Regular updates with clear metrics showing your marketing ROI.
              </BenefitText>
            </BenefitItem>
          </Col>
          
          <Col lg={6} md={6} className="mb-4">
            <BenefitItem>
              <BenefitIcon />
              <BenefitText>
                <strong>Integrated Approach:</strong> Cohesive strategies across multiple channels for maximum impact.
              </BenefitText>
            </BenefitItem>
            
            <BenefitItem>
              <BenefitIcon />
              <BenefitText>
                <strong>Industry Expertise:</strong> Specialized knowledge across various industries and marketing disciplines.
              </BenefitText>
            </BenefitItem>
            
            <BenefitItem>
              <BenefitIcon />
              <BenefitText>
                <strong>Continuous Optimization:</strong> Ongoing refinement of strategies based on performance data.
              </BenefitText>
            </BenefitItem>
          </Col>
        </Row>
      </Container>
    </MarketingContainer>
  );
};

export default MarketingSection; 