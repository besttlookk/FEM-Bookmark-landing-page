import React from "react";
import styled, { css } from "styled-components";
import media from "../styles/media";

const ButtonEl = styled.button<{ variant?: string; full?: boolean }>`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  box-shadow: var(--shadow);
  transition: 0.5s;
  border: 2px solid transparent;
  font-weight: 700;
  cursor: pointer;

  ${media.laptop} {
    padding: 1.4rem 3.2rem;
    font-size: 1.4rem;
  }

  ${(p) =>
    p.variant === "secondary"
      ? css`
          color: var(--col-dark);
          background-color: hsla(229, 8%, 60%, 0.1);

          &:hover {
            border-color: var(--col-blue);
            background-color: transparent;
            color: var(--col-blue);
          }
        `
      : p.variant === "danger"
      ? css`
          background-color: var(--col-red);
          color: white;

          &:hover {
            opacity: 0.9;
          }
        `
      : css`
          color: white;
          background-color: var(--col-blue);

          &:hover {
            border-color: var(--col-blue);
            background-color: transparent;
            color: var(--col-blue);
          }
        `}

  ${(p) =>
    p.full &&
    css`
      width: 100%;
      padding: 1.2rem 2rem;
    `}
`;

const Button = ({
  variant,
  children,
  btnType,
  full,
}: {
  variant?: string;
  btnType?: "reset" | "button" | "submit";
  full?: boolean;
  children: string;
}) => {
  return (
    <ButtonEl variant={variant} type={btnType ? btnType : "button"} full={full}>
      {children}
    </ButtonEl>
  );
};

export default Button;
