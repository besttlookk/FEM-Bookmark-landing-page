import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import ChromeIcon from "../assets/logo-chrome.svg";
import FirefoxIcon from "../assets/logo-firefox.svg";
import OperaIcon from "../assets/logo-opera.svg";
import Card from "../components/Card";
import { SectionWrapper } from "../styles/shared";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  justify-items: center;
  max-width: 980px;
  margin-inline: auto;

  ${media.tablet} {
    gap: 1.6rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DownloadSection = () => {
  return (
    <section>
      <SectionWrapper>
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>

        <CardWrapper>
          <Card browser="Chrome" version="62">
            <ChromeIcon />
          </Card>

          <Card browser="Firefox" version="55">
            <FirefoxIcon />
          </Card>

          <Card browser="Opera" version="46">
            <OperaIcon />
          </Card>
        </CardWrapper>
      </SectionWrapper>
    </section>
  );
};

export default DownloadSection;
