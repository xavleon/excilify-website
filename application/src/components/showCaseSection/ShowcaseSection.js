import styled from "styled-components";
import Image from "next/image";
import Button from "../button/Button";

export const ShowcaseSectionWrapper = styled.section`
  padding: 6rem 1rem;
  background-color: #2a2a2a;
`;

export const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
  color: #ffffff;

  span {
    color: #ffff00;
  }
`;

export const Grid = styled.div`
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

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Overlay = styled.div`
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

export const OverlayContent = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #d3d3d3;
`;

export const StyledButton = styled(Button)`
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
