import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  //background: #000;
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  padding: 4px 0;

  .angle-bracket {
    color: #fff;
    transition: color 0.2s ease;
  }

  .logo-text {
    color: #fff;
    position: relative;
    transition: color 0.2s ease;
  }

  /* Override any default link colors */
  &,
  &:link,
  &:visited {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    color: #ffd700;
    text-decoration: none;

    .angle-bracket {
      color: #ffd700;
    }

    .logo-text {
      color: #ffffff;
    }

    .logo-text::after {
      width: 100%;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    //position: absolute;
    //top: 0;
    //right: 0;
    margin-top: auto;
    margin-bottom: auto;
    //transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  height: 80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 25%; // Try using percentage instead of fixed pixels
    left: 0;
    width: 0;
    height: 1px;
    background-color: #ffd700;
    transition: width 0.3s ease;
  }

  /* Handle the width of the underline to match the text */
  &:hover::after {
    width: calc(100% - 2rem); // Accounting for padding
    margin: 0 1rem; // Center the underline within the padding
  }

  &:hover {
    color: #fff;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
    sp
    
  }
`;

export const NavBtnLink = styled(LinkR)`
  background-color: #333333;
  color: #ffd700;
  border: 1.5px solid #ffd700;
  padding: 8px 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  z-index: 1;
  border-radius: 50px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #ffd700;
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: #333333;
  }

  &:hover::before {
    width: 100%;
  }
`;
