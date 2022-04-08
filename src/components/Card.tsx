import React from "react";
import styled from "styled-components";
import { CardType } from "../types";
import Button from "./Button";
import media from "../styles/media";

const Wrapper = styled.div`
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.2);
  border-radius: 12px;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    padding: 3rem 2rem;

    h3 {
      margin-bottom: 0;
      margin-top: 2rem;
    }

    P {
      margin-bottom: 0;
    }
  }

  .btn {
    padding: 2rem 2rem;
    border-top: 4px dotted hsla(231, 69%, 60%, 0.3);
  }

  ${media.laptop} {
    position: relative;
    &:nth-child(2) {
      top: 30px;
    }

    &:last-child {
      top: 60px;
    }
  }
`;

const Card = ({ children, browser, version }: CardType) => {
  return (
    <Wrapper>
      <div className="main">
        {children}
        <h3>Add to {browser}</h3>
        <p>Minimum version {version}</p>
      </div>

      <div className="btn">
        <Button>Add & Install Extension</Button>
      </div>
    </Wrapper>
  );
};

export default Card;
