import styled from "@react-pdf/styled-components";
import React from "react";

const ScoreValueWrapper = styled.View`
  position: relative;
  height: 16px;
  border: solid 1px #000000;
`;

const RedCircle = styled.View`
  border: 2px solid #e41818;
  box-sizing: border-box;

  position: absolute;

  height: 24px;
  width: 24px;
  border-radius: 12px;
  top: -6px;
  left: -12px;
`;

type ScoreValueProps = {
  active?: boolean;
};
const ScoreValue = (props: ScoreValueProps) => {
  const { active } = props;
  return <ScoreValueWrapper>{active && <RedCircle />}</ScoreValueWrapper>;
};

const Wrapper = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  text-align: center;
  height: 16px;
  min-height: 16px;
  min-width: 120px;
`;
const HorizontalRule = styled.View`
  position: absolute;
  width: 100%;
  border: solid 1px #000;
  margin-top: 8px;
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
      <HorizontalRule />
      {itemsArr.map((_, index) => (
        <ScoreValue key={index} active={index === value} />
      ))}
    </Wrapper>
  );
};

export default SingleScore;
