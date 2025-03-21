import styled from "styled-components";

export const SectionDivider = styled.div`
  height: 120px;
  width: 100%;
  background: linear-gradient(to bottom, rgba(12, 12, 12, 0.8), transparent);
  position: absolute;
  top: -120px;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

export const ServicesContainer = styled.div`
    min-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #080808 0%, #121212 100%);
    padding: 100px 0;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -150px;
      right: -150px;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, rgba(255, 215, 0, 0.02) 40%, transparent 70%);
      z-index: 0;
    }

    @media screen and (max-width: 768px) {
        min-height: 1100px;
    }

    @media screen and (max-width: 480px) {
        min-height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    grid-gap: 30px;
    padding: 20px 50px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        padding: 20px 50px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 20px 30px;
    }
`

export const ServicesCard = styled.div`
    background: #1a1a1a;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 16px;
    height: 100%;
    padding: 50px 30px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    transition: all 0.4s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 0.05);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0.4) 50%, rgba(255,215,0,0.1) 100%);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }

    &:hover {
        transform: translateY(-15px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(255, 215, 0, 0.1);

        &::before {
          transform: scaleX(1);
        }
    }
`

export const ServicesIcon = styled.img`
    height: 120px;
    width: 120px;
    margin-bottom: 36px;
    transition: transform 0.3s ease;
    
    ${ServicesCard}:hover & {
      transform: scale(1.1);
    }
`

export const ServicesH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    margin-bottom: 70px;
    position: relative;
    padding-bottom: 20px;
    font-weight: 800;
    letter-spacing: -0.5px;
    text-align: center;
    
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background-color: #FFD700;
        border-radius: 2px;
    }

    @media screen and (max-width: 480px) {
        font-size: 2.2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    position: relative;
    padding-bottom: 12px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 2px;
      background-color: rgba(255, 215, 0, 0.5);
      transition: width 0.3s ease;
    }
    
    ${ServicesCard}:hover &::after {
      width: 60px;
      background-color: rgba(255, 215, 0, 0.8);
    }
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 10px;
`
