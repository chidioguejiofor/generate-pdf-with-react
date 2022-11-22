import React from "react";
import styled from "@react-pdf/styled-components";
import ScoreColoredCircles from './ScoreColoredCircles';

const ScoreLabelText = styled.Text`
  color: black;
  font-family: Roboto;
  font-weight: bold;
  text-align: right;
  font-size: 11px;
  width: 190px;
  padding-left: 52px;
`;

const GroupValueWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border: 0.75px solid black;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
`;

const ScoreLabelCirclesWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-sizing: border-box;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const SectionScore = (props) => {
  const { value, valueInfo, valueCode} = props;
  return (
    <GroupValueWrapper>
      <ScoreLabelCirclesWrapper>
        <ScoreColoredCircles valueCode={valueCode} value={value}/>
        <ScoreLabelText>
          {value} – {valueInfo[value]}
        </ScoreLabelText>
      </ScoreLabelCirclesWrapper>
    </GroupValueWrapper>
  );
};

export default SectionScore;
