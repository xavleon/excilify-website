import styled from "styled-components";

export const SectionDivider = styled.div`
  height: 120px;
  width: 100%;
  background: linear-gradient(to bottom, #080808, transparent);
  position: absolute;
  top: -120px;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

export const BottomDivider = styled.div`
  height: 120px;
  width: 100%;
  background: linear-gradient(to top, #080808, transparent);
  position: absolute;
  bottom: -120px;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

export const InfoContainer = styled.div`
  width: 100%;
  min-height: 700px;
  justify-content: center;
  display: flex;
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

export const YellowSquareAccent = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: rgba(255, 215, 0, 0.08);
  border-radius: 8px;
  z-index: 1;
  
  &.top-left {
    top: 20%;
    left: 15%;
    transform: rotate(20deg);
  }
  
  &.bottom-right {
    bottom: 20%;
    right: 15%;
    transform: rotate(-15deg);
  }
`;

export const CircleAccent = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 215, 0, 0.04);
  border-radius: 50%;
  z-index: 1;
  
  &.top-right {
    top: 15%;
    right: 25%;
  }
  
  &.bottom-left {
    bottom: 15%;
    left: 20%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding: 100px 0;
  width: 1200px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media screen and (max-width: 1200px) {
    width: 90%;
    padding: 80px 0;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  position: relative;
  
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h5`
  color: #FFD700;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  font-size: 1rem;
  display: inline-block;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #FFD700;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const InfoText = styled.p`
  color: #f7f7f7;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

export const ImageContainer = styled.div`
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    width: 160px;
    height: 160px;
    background-color: rgba(255, 215, 0, 0.12);
    top: -15px;
    right: -15px;
    border-radius: 8px;
    z-index: -1;
  }
  
  &::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 215, 0, 0.08);
    bottom: 20px;
    left: -20px;
    border-radius: 50%;
    z-index: -1;
  }
`;
