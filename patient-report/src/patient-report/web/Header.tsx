import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  font-family: Roboto;
  padding-top: 1.75rem;
  img {
    display: block;
    object-fit: contain;
    width: 120px;
    &.inter-rai {
      height: auto;
      width: 150px;
    }
  }
`;

const HeadingTextGroup = styled.div`
  text-align: center;
  h2,
  h3 {
    font-size: 1.25rem;
    font-weight: normal;
  }
  h2 {
    margin-bottom: 0.1875rem;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <img className="inter-rai" src="/interrai-logo.png" alt="Inter-RAI" />
      <HeadingTextGroup>
        <h2>Self-Reported Check-Up Assessment:</h2>
        <h3> Results for Patients and Caregivers</h3>
      </HeadingTextGroup>
      <img src="/yourcareplus-logo.png" alt="Your Care" />
    </Wrapper>
  );
};

export default Header;
