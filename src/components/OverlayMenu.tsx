import React, { useContext } from "react";
import styled from "styled-components";
import media from "../styles/media";
import Navigation from "./Navigation";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { AppContext } from "../contexts/appContext";

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(-100%);
  transition: transform 0.5s;
  z-index: 100;
  padding: 4rem;
  padding-top: 10rem;
  background-color: hsla(229, 31%, 21%, 0.9);

  &.menu-active {
    transform: translateX(0);
  }

  ${media.tablet} {
    display: none;
  }
`;

const OverlayMenu = () => {
  const { isMenuActive } = useContext(AppContext);
  return (
    <Wrapper className={isMenuActive ? "menu-active" : ""}>
      <Navigation />
      <SocialMediaIcons />
    </Wrapper>
  );
};

export default OverlayMenu;
