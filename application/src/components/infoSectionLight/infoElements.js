import styled from "styled-components";

export const SectionDivider = styled.div`
  height: 120px;
  width: 100%;
  background: linear-gradient(to bottom, #121212, rgba(12, 12, 12, 0.3), transparent);
  position: absolute;
  top: -120px;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

export const InfoContainer = styled.div`
  width: 100%;
  min-height: 700px;
  justify-content: center;
  display: flex;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #0c0c0c 0%, #121212 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: -300px;
    right: -300px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, rgba(255, 215, 0, 0.03) 40%, transparent 70%);
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -200px;
    left: -200px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.06) 0%, rgba(255, 215, 0, 0.02) 50%, transparent 70%);
    z-index: 0;
  }
`;

export const YellowSquareAccent = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: rgba(255, 215, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
  
  &.top-left {
    top: 20%;
    left: 8%;
    transform: rotate(15deg);
  }
  
  &.bottom-right {
    bottom: 15%;
    right: 10%;
    transform: rotate(-12deg);
  }
`;

export const CircleAccent = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 215, 0, 0.06);
  border-radius: 50%;
  z-index: 1;
  
  &.top-right {
    top: 15%;
    right: 20%;
  }
  
  &.bottom-left {
    bottom: 15%;
    left: 15%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding: 100px 24px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  position: relative;
  letter-spacing: -0.5px;
  color: #ffffff;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #FFD700;
    border-radius: 2px;
  }
`;

export const Subtitle = styled.h5`
  color: #FFD700;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 215, 0, 0.3);
    border-radius: 8px;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 180px;
    height: 180px;
    background-color: rgba(255, 215, 0, 0.15);
    bottom: -30px;
    left: -30px;
    border-radius: 8px;
    transform: rotate(-12deg);
    z-index: -2;
  }
  
  img {
    border-radius: 8px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-8px);
    }
  }
`;
