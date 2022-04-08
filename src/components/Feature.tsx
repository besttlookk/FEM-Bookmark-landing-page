import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { FeatureType } from "../types";
import Button from "./Button";
import Illustration from "./Illustration";

const Wrapper = styled.div`
  ${media.tablet} {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const IllustrationWrapper = styled.div`
  ${media.tablet} {
    width: 50%;
  }

  ${media.laptop} {
    width: 60%;
  }
`;

const Content = styled.div`
  text-align: center;

  p {
    max-width: 85%;
    margin-inline: auto;
  }

  .btn {
    margin-top: 2rem;
    display: none;
  }

  /* TABLET STYLE STARTS HERE */
  ${media.tablet} {
    width: 50%;
    text-align: start;
    padding-left: 2rem;

    p {
      margin-inline: 0 auto;
    }

    .btn {
      display: block;
    }
  }

  /* Laptop STYLE STARTS HERE */
  ${media.tablet} {
    width: 40%;
    /* padding-left: 2rem; */

    p {
      font-size: 1.6rem;
    }
  }
`;

const Feature = ({ data }: { data: FeatureType }) => {
  return (
    <Wrapper>
      <IllustrationWrapper>
        <Illustration
          tabNo={data.tabNo}
          width={data.width}
          height={data.height}
        />
      </IllustrationWrapper>

      <Content>
        <h3>{data.heading}</h3>
        <p>{data.content}</p>
        <div className="btn">
          <Button>More Info</Button>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Feature;
