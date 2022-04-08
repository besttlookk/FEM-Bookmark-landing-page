import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import NavItem from "./NavItem";

const NavListEl = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  ${media.tablet} {
    flex-direction: row;
    align-items: center;
    gap: 2.6rem;
    font-size: 1.6rem;
  }

  ${media.laptop} {
    gap: 3.6rem;
  }
`;

const NavList = () => {
  return (
    <NavListEl>
      <NavItem>Features</NavItem>
      <NavItem>Pricing</NavItem>
      <NavItem>Contact</NavItem>
      <NavItem>Login</NavItem>
    </NavListEl>
  );
};

export default NavList;
