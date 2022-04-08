import React from "react";
import styled from "styled-components";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  svg {
    &:hover path {
      fill: var(--col-red);
    }
  }
`;

const SocialMediaIcons = () => {
  return (
    <IconsWrapper>
      <FacebookIcon />
      <TwitterIcon />
    </IconsWrapper>
  );
};

export default SocialMediaIcons;
