import React, { useState } from "react";
import styled from "styled-components";
import FeatureEasy from "../components/FeatureEasy";
import FeatureSimple from "../components/FeatureSimple";
import FeatureSpeed from "../components/FeatureSpeed";
import media from "../styles/media";
import { Wrapper } from "../styles/shared";

const Section = styled.section`
  max-width: 100vw;
  overflow-x: hidden;
`;

const SectionWrapper = styled(Wrapper)`
  text-align: center;
  padding: 6rem 1.6rem 3rem;

  p {
    ${media.tablet} {
      max-width: 380px;
      margin-inline: auto;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: var(--divider);
  margin-top: 2.6rem;

  ${media.tablet} {
    flex-direction: row;
    justify-content: center;
    border-top: none;
  }
`;

const MenuItem = styled.li`
  position: relative;
  padding-block: 1.6rem;
  border-bottom: var(--divider);
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.4s;
    height: 4px;
    width: 0;
    background-color: var(--col-red);
    opacity: 0;
  }

  span {
    font-size: 1.4rem;
    color: var(--col-gray);
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: var(--col-red);
    }
  }

  &.active {
    &::after {
      width: 28%;
      opacity: 1;
    }

    span {
      color: var(--col-dark);
    }
  }

  ${media.tablet} {
    padding-inline: 3rem;

    &.active::after {
      width: 80%;
    }

    span {
      font-size: 1.6rem;
    }
  }
`;

const MenuDetailWrapper = styled.div`
  margin-block: 4rem;
`;
const FeatureSection = () => {
  const [activeItem, setActiveItem] = useState("1");
  return (
    <Section>
      <SectionWrapper>
        <h2>Features</h2>
        <p>
          {" "}
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <Menu>
          <MenuItem
            className={activeItem === "1" ? "active" : ""}
            onClick={() => setActiveItem("1")}
          >
            <span>Simple Bookmarking</span>
          </MenuItem>
          <MenuItem
            className={activeItem === "2" ? "active" : ""}
            onClick={() => setActiveItem("2")}
          >
            <span>Speed Searching</span>
          </MenuItem>
          <MenuItem
            className={activeItem === "3" ? "active" : ""}
            onClick={() => setActiveItem("3")}
          >
            <span>Easy Sharing</span>
          </MenuItem>
        </Menu>

        <MenuDetailWrapper>
          {activeItem === "1" && <FeatureSimple />}
          {activeItem === "2" && <FeatureSpeed />}
          {activeItem === "3" && <FeatureEasy />}
        </MenuDetailWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default FeatureSection;
