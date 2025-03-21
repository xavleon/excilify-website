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
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  padding: 12px 0;
  transition: all 0.3s ease;

  .logo-container {
    padding: 3px 0;
    transition: all 0.3s ease;
    min-width: 200px;
  }

  .logo-separator {
    transition: all 0.3s ease;
  }

  /* Override any default link colors */
  &,
  &:link,
  &:visited {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
    
    .logo-separator {
      background-color: #ffffff;
    }
    
    .logo-brand {
      color: #FFD700;
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
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease-in-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 28px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #FFD700;
    transition: all 0.3s ease;
    transform: translateX(-50%);
    opacity: 0;
  }

  &:hover {
    color: #FFD700;
    
    &::after {
      width: 30px;
      opacity: 1;
    }
  }

  &.active {
    color: #FFD700;
    
    &::after {
      width: 30px;
      opacity: 1;
    }
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background-color: transparent;
  color: #FFD700;
  border: 2px solid #FFD700;
  padding: 10px 28px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    width: 0;
    height: 100%;
    background-color: #FFD700;
    transform: skewX(-20deg);
    transition: width 0.4s ease;
    z-index: -1;
  }

  &:hover {
    color: #000;
    border-color: #FFD700;
    box-shadow: 0 6px 15px rgba(255, 215, 0, 0.2);
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