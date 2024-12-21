// ShowcaseSection.js
import React from "react";
import styled from "styled-components";

const ShowcaseSectionWrapper = styled.section`
  padding: 6rem 1rem;
  background-color: #2a2a2a;
`;

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
  color: #ffffff;

  span {
    color: #ffff00;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

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
  border-radius: 0.5rem;
  background-color: #2a2a2a;
  border: 1px solid rgba(255, 255, 0, 0.1);
`;

const StyledImage = styled.div`
  width: 100%;
  height: 400px;
  background: #444; /* Placeholder background */
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(51, 51, 51, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const OverlayContent = styled.div`
  text-align: center;
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #d3d3d3;
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  border: 1px solid #ffff00;
  color: #ffff00;
  background: none;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #ffff00;
    color: #333333;
  }
`;

const ShowcaseSection = () => {
  return (
    <ShowcaseSectionWrapper>
      <Container>
        <Title>
          Our <span>Featured</span> Work
        </Title>
        <Grid>
          {/* Example Project 1 */}
          <Card>
            <StyledImage />
            <Overlay>
              <OverlayContent>
                <CardTitle>E-Commerce Platform</CardTitle>
                <CardDescription>
                  Modern shopping experience with React and Next.js
                </CardDescription>
                <StyledButton>View Project</StyledButton>
              </OverlayContent>
            </Overlay>
          </Card>

          {/* Example Project 2 */}
          <Card>
            <StyledImage />
            <Overlay>
              <OverlayContent>
                <CardTitle>SaaS Dashboard</CardTitle>
                <CardDescription>
                  Analytics and management platform
                </CardDescription>
                <StyledButton>View Project</StyledButton>
              </OverlayContent>
            </Overlay>
          </Card>

          {/* Example Project 3 */}
          <Card>
            <StyledImage />
            <Overlay>
              <OverlayContent>
                <CardTitle>Social Platform</CardTitle>
                <CardDescription>
                  Community-driven content sharing
                </CardDescription>
                <StyledButton>View Project</StyledButton>
              </OverlayContent>
            </Overlay>
          </Card>
        </Grid>
      </Container>
    </ShowcaseSectionWrapper>
  );
};

export default ShowcaseSection;
