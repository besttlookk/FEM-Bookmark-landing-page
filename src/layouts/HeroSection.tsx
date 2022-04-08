import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import media from "../styles/media";
import { Wrapper } from "../styles/shared";

const Section = styled.section`
  width: 100vw;
  overflow-x: hidden;
`;

const SectionWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 4rem 0;

  ${media.tablet} {
    flex-direction: row;
    padding: 8rem 0;
    gap: 1rem;
  }

  ${media.laptop} {
    /* padding: 10rem 0; */
    /* gap: 8rem; */
  }
`;

const IllustrationWrapper = styled.div`
  position: relative;

  ${media.tablet} {
    order: 2;
    padding-inline: 1rem;
    width: 50%;
  }

  ${media.laptop} {
    width: 40%;
  }
`;

const BlueBgStrip = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  transform: translateX(100px);
  width: 90%;
  height: 85%;
  background-color: var(--col-blue);
  border-radius: 200px 0 0 200px;

  ${media.tablet} {
    top: 70px;
    height: 70%;
  }

  ${media.laptop} {
    top: 100px;
    height: 80%;
  }
`;

const Content = styled.div`
  text-align: center;

  ${media.tablet} {
    order: 1;
    text-align: left;
    width: 50%;
    padding-top: 4rem;
  }

  ${media.laptop} {
    padding-top: 8rem;
    width: 60%;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 500;

    ${media.tablet} {
      font-size: 2.8rem;
    }

    ${media.laptop} {
      font-size: 4.5rem;
    }

    span {
      display: block;
    }
  }

  p {
    max-width: 75%;
    margin-inline: auto;
    color: var(--col-gray);
    font-size: 1.5rem;
    line-height: 1.6;
    margin-block: 2rem;

    ${media.tablet} {
      font-size: 1.6rem;
      margin-inline: 0 auto;
      max-width: 80%;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;

    ${media.tablet} {
      justify-content: flex-start;
    }
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <SectionWrapper>
        <IllustrationWrapper>
          <BlueBgStrip />
          <Image
            alt="hero-illustration"
            src="/images/illustration-hero.svg"
            width={657}
            height={466}
            objectFit="cover"
          />
        </IllustrationWrapper>
        <Content>
          <h1>
            A Simple Bookmark <span>Manager</span>
          </h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="buttons">
            <Button>Get it on Chrome</Button>
            <Button variant="secondary">Get it on Firefox</Button>
          </div>
        </Content>
      </SectionWrapper>
    </Section>
  );
};

export default HeroSection;
