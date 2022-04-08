import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { Wrapper } from "../styles/shared";

const Section = styled.section`
  background-color: var(--col-red);
`;

const Credit = styled(Wrapper)`
  font-size: 1.5rem;
  padding: 3rem 0;
  color: white;
  text-align: center;

  a {
    color: var(--col-dark);
    font-weight: 500;
    margin-inline: 1px;

    &:hover {
      text-decoration: underline;
    }
  }

  ${media.tablet} {
    font-size: 1.8rem;
  }

  ${media.tablet} {
    font-size: 2rem;
  }
`;

const CreditSection = () => {
  return (
    <Section>
      <Credit>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/besttlookk"
          target="_blank"
          rel="noreferrer"
        >
          Prabhash Ranjan
        </a>
        .
      </Credit>
    </Section>
  );
};

export default CreditSection;
