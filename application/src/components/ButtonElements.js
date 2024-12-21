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
  background: ${({ primary }) => (primary ? "#B05FFD" : "#010606")};
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
    background: ${({ primary }) => (primary ? "#fff" : "#B05FFD")};
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
    primary ? "#FFD700" : "#2A2A2A"}; // Changed to yellow and grey
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) =>
    dark ? "#2A2A2A" : "#fff"}; // Updated dark color to match theme
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
    background: ${({ primary }) =>
      primary ? "#2A2A2A" : "#FFD700"}; // Swapped colors on hover
    color: ${({ dark }) =>
      dark ? "#fff" : "#2A2A2A"}; // Updated hover text color
  }
`;
export const ButtonBasicInv = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#B05FFD" : "#010606")};
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
