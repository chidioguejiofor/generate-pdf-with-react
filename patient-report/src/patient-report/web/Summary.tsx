import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  border-bottom: solid 1px #000;
  padding-bottom: 1rem;
  margin-top: 1rem;
`;

const LabelWrapper = styled.div`
  text-align: center;

  margin-top: 0.25rem;
  &:first-of-type {
    margin-top: 0;
  }
  .value-label {
    font-weight: bold;
    font-weight: 1rem;
    font-size: 1.1rem;
  }

  .value {
    display: inline-block;
    margin-left: 0.75rem;
    padding-bottom: 1px;
    border-bottom: 1px solid #000;
  }
`;

const Summary = () => {
  return (
    <Wrapper>
      <LabelWrapper>
        <span className="value-label">This summary sheet is for:</span>
        <span className="value">A misterious report</span>
      </LabelWrapper>
      <LabelWrapper>
        <span className="value-label">Date completed:</span>
        <span className="value">20 Nov 2020</span>
      </LabelWrapper>
    </Wrapper>
  );
};

export default Summary;
