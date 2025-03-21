import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #2a2a2a; // Changed to theme grey
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s all ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #ffd700; // Changed to yellow
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  
  .sidebar-logo {
    margin-bottom: 50px;
    align-items: center;
    
    .logo-brand {
      font-size: 32px;
    }
    
    .logo-separator {
      width: 85%;
      margin: 6px 0;
      height: 2px;
    }
    
    .logo-tagline {
      font-size: 14px;
    }
  }
  
  .logo-text {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  
  .mb-5 {
    margin-bottom: 3rem;
  }
`;

export const SidebarMenu = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s all ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ffd700; // Changed to yellow
    transition: 0.2s all ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  text-decoration: none;
  background: #2a2a2a; // Changed to grey
  white-space: nowrap;
  padding: 15px 35px;
  color: #ffd700; // Changed to yellow
  font-size: 1.2rem;
  outline: none;
  border: 2px solid #ffd700; // Added yellow border
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 900;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffd700; // Changed to yellow
    color: #2a2a2a; // Changed to grey
    border: 2px solid #ffd700; // Maintain border
  }
`;
