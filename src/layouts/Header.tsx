import React, { useState, useContext } from "react";
import styled from "styled-components";
import media from "../styles/media";
import { Wrapper } from "../styles/shared";
import LogoIcon from "../assets/logo-bookmark.svg";
import CloseIcon from "../assets/icon-close.svg";
import MenuIcon from "../assets/icon-hamburger.svg";
import Navigation from "../components/Navigation";
import { AppContext } from "../contexts/appContext";

const HeaderEl = styled.header`
  position: sticky;
  top: 0;
  z-index: 300;
  background-color: white;

  &.active {
    background-color: transparent;
  }
`;

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--height-header);

  &.active {
    .logo {
      path {
        fill: white;
      }
    }
  }
`;

const LogoWrapper = styled.div``;

const NavigationWrapper = styled.div`
  display: none;

  ${media.tablet} {
    display: block;
  }
`;

const MenuEl = styled.div`
  width: 24px;
  height: 20px;
  cursor: pointer;

  ${media.tablet} {
    display: none;
  }
`;

const Header = () => {
  const { isMenuActive, setIsMenuActive } = useContext(AppContext);

  return (
    <HeaderEl className={isMenuActive ? "active" : ""}>
      <HeaderWrapper className={isMenuActive ? "active" : ""}>
        <div>
          <LogoWrapper>
            <LogoIcon className="logo" />
          </LogoWrapper>
        </div>

        <div className="right-side">
          <MenuEl>
            {isMenuActive ? (
              <CloseIcon onClick={() => setIsMenuActive(false)} />
            ) : (
              <MenuIcon onClick={() => setIsMenuActive(true)} />
            )}
          </MenuEl>
          <NavigationWrapper>
            <Navigation />
          </NavigationWrapper>
        </div>
      </HeaderWrapper>
    </HeaderEl>
  );
};

export default Header;
