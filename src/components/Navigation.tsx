import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import NavList from "./NavList";

const NavigationEl = styled.nav`
  z-index: 100;

  ${media.tablet} {
    position: initial;
    top: initial;
    right: initial;
    transform: initial;
    background-color: initial;
    padding: initial;
  }

  &.active {
    opacity: 1;
  }
`;

const NavFooterEl = styled.div``;

const Navigation = () => {
  return (
    <NavigationEl>
      <NavList />
      <NavFooterEl />
    </NavigationEl>
  );
};

export default Navigation;
