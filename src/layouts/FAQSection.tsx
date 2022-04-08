import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
import { SectionWrapper } from "../styles/shared";
import dataArr from "../faq.json";
import FAQ from "../components/FAQ";
import Button from "../components/Button";

const Wrapper = styled(SectionWrapper)`
  margin-top: 5rem;
  padding-bottom: 12rem;
  ${media.laptop} {
    margin-top: 10rem;
  }

  .btn {
    margin-top: 3.5rem;
  }

  ${media.tablet} {
    padding-bottom: 16rem;
  }
`;

const QuestionsWrapper = styled.div`
  max-width: 540px;
  margin-inline: auto;
  text-align: start;
  border-top: var(--divider);
`;

const FAQSection = () => {
  const [activeQuesArr, setActiveQuesArr] = useState<string[]>([]);

  return (
    <section>
      <Wrapper>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>

        <QuestionsWrapper>
          {dataArr.map((data, i) => (
            <FAQ
              data={data}
              key={data.questionId}
              activeQuesArr={activeQuesArr}
              setActiveQuesArr={setActiveQuesArr}
            />
          ))}
        </QuestionsWrapper>
        <div className="btn">
          <Button>More Info</Button>
        </div>
      </Wrapper>
    </section>
  );
};

export default FAQSection;
