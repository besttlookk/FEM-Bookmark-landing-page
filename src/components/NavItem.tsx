import Link from "next/link";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const NavItemEl = styled.li`
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  padding: 2rem;

  a {
    transition: all 0.3s;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1.4px;

    ${media.tablet} {
      color: var(--col-gray);
      font-weight: 500;
    }

    &:hover {
      color: var(--col-red);
    }
  }

  ${media.tablet} {
    padding: 0;
  }

  &:last-child {
    margin-top: 2rem;
    padding: 1.2rem 2.6rem;
    border-radius: 5px;
    border: 2px solid white;
    transition: all 0.5s;

    a {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 500;
      color: white;
      letter-spacing: 1.4px;
    }

    ${media.tablet} {
      margin-top: 0;
      padding: 0;

      a {
        font-weight: 500;
        color: white;
        background-color: var(--col-red);
        padding: 0.8rem 2rem;
        border-radius: 5px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
        border: 2px solid transparent;

        &:hover {
          color: var(--col-red);
          background-color: transparent;
          border-color: var(--col-red);
        }
      }
    }
  }
`;

const NavItem = ({ children }: { children: string }) => {
  return (
    <NavItemEl>
      <Link href="/">{children}</Link>
    </NavItemEl>
  );
};

export default NavItem;
