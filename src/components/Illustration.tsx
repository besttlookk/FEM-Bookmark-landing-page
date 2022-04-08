import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const Wrapper = styled.div`
  position: relative;
  margin-block: 6.5rem;
`;

const BlueBgStrip = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  transform: translateX(-100px);
  width: 90%;
  height: 85%;
  background-color: var(--col-blue);
  border-radius: 0 200px 200px 0;

  ${media.tablet} {
    top: 85px;
  }

  ${media.laptop} {
    top: 100px;
  }
`;
const Illustration = ({
  tabNo,
  width,
  height,
}: {
  tabNo: string;
  width: number;
  height: number;
}) => {
  return (
    <Wrapper>
      <BlueBgStrip />

      <Image
        alt="hero-illustration"
        src={`/images/illustration-features-tab-${tabNo}.svg`}
        width={width}
        height={height}
        objectFit="cover"
      />
    </Wrapper>
  );
};

export default Illustration;
