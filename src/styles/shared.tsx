import styled from "styled-components";
import media from "./media";

interface Props {
  reverse: boolean;
  inline: boolean;
}

export const Section = styled.section<Props>`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexBetween = styled(Flex)`
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 90vw;
  margin-inline: auto;
  max-width: 128rem;

  ${media.laptop} {
    padding-inline: 1.6rem;
  }
`;

export const SectionWrapper = styled(Wrapper)`
  text-align: center;
  padding: 3rem 1.6rem;
  margin-inline: auto;

  p {
    max-width: 380px;
    margin-inline: auto;
    margin-bottom: 3.2rem;

    ${media.laptop} {
      max-width: 450px;
      margin-bottom: 4.5rem;
    }
  }
`;
