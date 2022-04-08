import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Wrapper } from "../styles/shared";
import ErrorIcon from "../assets/icon-error.svg";
import media from "../styles/media";
const Section = styled.section`
  background-color: var(--col-blue);
`;

const SectionWrapper = styled(Wrapper)`
  padding: 6rem 0;
  text-align: center;

  .text {
    color: white;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h2 {
    color: white;
    margin-bottom: 2.6rem;

    span {
      display: block;
    }
  }
`;

const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  ${media.tablet} {
    flex-direction: row;
    align-items: center;

    .input-group {
      flex: 1;
    }

    .btn {
      height: 100%;
    }

    .small-screen-error {
      ${media.tablet} {
        display: none;
      }
    }
  }
`;

const FormControl = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 1.6rem;
    border-radius: 5px;
    border: 2px solid transparent;
    outline: none;
    font-size: 1.4rem;

    &:hover {
      border-color: lightgray;
    }

    &.error {
      border-color: var(--col-red);
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .large-screen-error {
    display: none;

    ${media.tablet} {
      display: block;
    }
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

const ErrorEl = styled.div`
  background-color: var(--col-red);
  padding: 0.3rem 1rem;
  font-weight: 500;
  text-align: start;

  p {
    color: white;
    font-size: 1.2rem;
  }

  ${media.tablet} {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    transform: translateY(100%);
    /* height: 20px; */
  }
`;

const FormSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return setError("Please enter email address");

    const isValidEmail = validateEmail(inputValue);

    if (!isValidEmail) {
      setError("Enter valid email");
      return;
    } else {
      setInputValue("");
    }
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <Section>
      <SectionWrapper>
        <p className="text">35,000+ already joined</p>
        <h2>
          Stay up-to-date with what <span>we&apos;re doing</span>
        </h2>

        <FormEl onSubmit={handleSubmit}>
          <div className="input-group">
            <FormControl>
              <input
                placeholder="Enter your email address"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={error ? "error" : ""}
                onFocus={() => setError("")}
              />
              {error && (
                <>
                  <IconWrapper>
                    <ErrorIcon />
                  </IconWrapper>
                  <div className="large-screen-error">
                    <ErrorEl>
                      <p>{error}</p>
                    </ErrorEl>
                  </div>
                </>
              )}
            </FormControl>
            {error && (
              <div className="small-screen-error">
                <ErrorEl>
                  <p>{error}</p>
                </ErrorEl>
              </div>
            )}
          </div>
          <div className="btn">
            <Button variant="danger" btnType="submit" full={true}>
              Contact Us
            </Button>
          </div>
        </FormEl>
      </SectionWrapper>
    </Section>
  );
};

export default FormSection;
