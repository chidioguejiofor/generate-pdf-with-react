import styled from "@emotion/styled";
import React from "react";

const ScoreValueWrapper = styled.div`
  position: relative;
  height: 1rem;
  border: solid 1px #000000;
  .red-circle {
    border: 2px solid #e41818;
    box-sizing: border-box;

    position: absolute;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    top: -0.5rem;
    left: -1rem;
  }
`;

type ScoreValueProps = {
  active?: boolean;
};
const ScoreValue = (props: ScoreValueProps) => {
  const { active } = props;
  return (
    <ScoreValueWrapper>
      {active && <div className="red-circle"></div>}
    </ScoreValueWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  position: relative;
  text-align: center;
  height: 1rem;
  min-height: 1rem;
  .horizontal-rule {
    position: absolute;
    width: 100%;
    border-top: solid 1px #000;
    margin-top: 0.5rem;
  }
`;

type SingleScoreProps = {
  value: number;
  numberOfItems: number;
};
const SingleScore = (props: SingleScoreProps) => {
  const { numberOfItems, value } = props;
  const itemsArr = Array(numberOfItems).fill(null);
  return (
    <Wrapper>
      <div className="horizontal-rule"></div>
      {itemsArr.map((item, index)=> (
        <ScoreValue key={index} active={index===value}/>
      ))}
      

    </Wrapper>
  );
};

export default SingleScore;
