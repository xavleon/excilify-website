import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const colors = {
  background: "#333333",
  text: "#FFFFFF",
  accent: "#FFD700",
  accentHover: "#FFC000",
};

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#FFD700" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#FFD700")};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  }
`;

export const ButtonR = styled(LinkR)`
  position: relative; /* Ensures ::before is positioned relative to this component */
  border-radius: 50px;
  background-color: ${colors.background};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${colors.accent};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-weight: 600;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${colors.accent};
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: ${colors.background};
  }
  &:hover::before {
    width: 100%;
  }
`;

export const ButtonBasic = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? "#FFD700" : "#2A2A2A"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 48px" : "12px 32px")};
  color: ${({ dark }) =>
    dark ? "#2A2A2A" : "#fff"};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ primary }) =>
    primary ? "0 6px 15px rgba(255, 215, 0, 0.25)" : "none"};
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    width: 0;
    height: 100%;
    background-color: ${({ primary }) =>
      primary ? "#2A2A2A" : "#FFD700"};
    transform: skewX(-15deg);
    transition: width 0.4s ease;
    z-index: -1;
  }

  &:hover {
    color: ${({ primary }) =>
      primary ? "#FFD700" : "#2A2A2A"};
    transform: translateY(-3px);
    box-shadow: ${({ primary }) =>
      primary 
        ? "0 10px 20px rgba(0, 0, 0, 0.2)" 
        : "0 10px 20px rgba(255, 215, 0, 0.2)"};
  }

  &:hover::before {
    width: 120%;
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonBasicInv = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#FFD700" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const PhoneCallButton = styled.a`
  background-color: #2A2A2A;
  color: ${colors.accent};
  border: 2px solid ${colors.accent};
  padding: 14px 28px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    width: 0;
    height: 100%;
    background-color: ${colors.accent};
    transform: skewX(-20deg);
    transition: width 0.5s ease;
    z-index: -1;
  }

  &:hover {
    color: #000;
    border-color: ${colors.accent};
    box-shadow: 0 6px 15px rgba(255, 215, 0, 0.3);
    transform: translateY(-2px);
  }

  &:hover::before {
    width: 120%;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.2);
  }
`;

export const PremiumButton = styled(LinkS)`
  background-color: #FFD700;
  color: #000;
  padding: 14px 32px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: translateX(-100%);
    transition: 0.6s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
    
    &::before {
      transform: translateX(100%);
    }
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
  }
`;

export const PremiumLightButton = styled(LinkS).attrs(props => ({
  as: props.as || LinkS
}))`
  background-color: #FFD700;
  color: #111;
  padding: 14px 32px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    transform: translateX(-100%);
    transition: 0.6s;
  }
  
  &:hover {
    transform: translateY(-2px);
    background-color: #F8CA00;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    
    &::before {
      transform: translateX(100%);
    }
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;
