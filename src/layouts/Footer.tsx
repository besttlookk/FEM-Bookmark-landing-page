import Link from "next/link";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { Wrapper } from "../styles/shared";
import LogoIcon from "../assets/logo-bookmark.svg";
import SocialMediaIcons from "../components/SocialMediaIcons";

const FooterEl = styled.footer`
  background-color: var(--col-dark);
`;

const FooterWraper = styled(Wrapper)`
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  ${media.tablet} {
    flex-direction: row;
  }

  ${media.laptop} {
    gap: 6rem;
  }
`;

const LogoWrapper = styled.div`
  svg {
    path {
      fill: white;
    }
  }
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  ${media.tablet} {
    flex-direction: row;
    flex: 1;
  }

  a {
    font-size: 1.5rem;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.6px;

    ${media.laptop} {
      font-size: 1.6rem;
    }

    &:hover {
      text-decoration: underline;
      color: var(--col-red);
    }
  }
`;

const Icons = styled.div``;

const Footer = () => {
  return (
    <FooterEl>
      <FooterWraper>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <Links>
          <li>
            <Link href="/">Features</Link>
          </li>
          <li>
            <Link href="/">Pricing</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </Links>

        <Icons>
          <SocialMediaIcons />
        </Icons>
      </FooterWraper>
    </FooterEl>
  );
};

export default Footer;
