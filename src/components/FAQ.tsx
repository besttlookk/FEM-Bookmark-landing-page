import React from "react";
import styled from "styled-components";
import { FAQPropsType } from "../types";
import ArrowIcon from "../assets/icon-arrow.svg";
import media from "../styles/media";

const Wrapper = styled.div`
  border-bottom: var(--divider);
  padding: 1.6rem 1rem;
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    font-size: 1.6rem;
    font-weight: 500;

    ${media.tablet} {
      font-size: 1.8rem;
    }
  }

  svg {
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  &.active {
    svg {
      transform: rotate(180deg);
    }
  }
`;

const Answer = styled.div`
  margin-top: 2rem;
  opacity: 0;
  height: 0;

  p {
    margin-inline: 0 auto;
    margin-bottom: 0;
    font-size: 1.4rem;
    display: none;

    ${media.tablet} {
      font-size: 1.6rem;
    }
  }

  &.active {
    opacity: 1;
    height: auto;
    transition: opacity 0.5s;

    p {
      display: block;
    }
  }
`;

const FAQ = ({ data, activeQuesArr, setActiveQuesArr }: FAQPropsType) => {
  const handleOnClick = () => {
    if (activeQuesArr.includes(data.questionId)) {
      setActiveQuesArr(
        activeQuesArr.filter((item) => item !== data.questionId)
      );
    } else {
      setActiveQuesArr([...activeQuesArr, data.questionId]);
    }
  };
  return (
    <Wrapper>
      <Question
        className={activeQuesArr.includes(data.questionId) ? "active" : ""}
      >
        <h5>{data.question}</h5>
        <ArrowIcon onClick={handleOnClick} />
      </Question>
      <Answer
        className={activeQuesArr.includes(data.questionId) ? "active" : ""}
      >
        <p>{data.answer}</p>
      </Answer>
    </Wrapper>
  );
};

export default FAQ;
