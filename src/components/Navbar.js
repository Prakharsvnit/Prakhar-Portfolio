import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #0077b5;
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #0077b5;
    padding: 1rem;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <Logo>Prakhar</Logo>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</NavLink>
        <NavLink to="experience" smooth={true} duration={500} onClick={closeMenu}>Experience</NavLink>
        <NavLink to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</NavLink>
        <NavLink to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
