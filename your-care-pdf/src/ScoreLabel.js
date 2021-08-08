import React from "react";
import styled from "@react-pdf/styled-components";
import { useReportData } from "./context/ReportDataContext";
import ScoreColoredCircles from './ScoreColoredCircles';

const ScoreLabelText = styled.Text`
  color: black;
  font-weight: bold;
  text-align: right;
  font-size: 11px;
  width: 190px;
  padding-left: 52px;
  font-family: Roboto;
`;

const ScoreLabelName = styled.Text`
  font-size: 11px;
  text-align: right;
  width: 100%;
  box-sizing: border-box;
  font-family: Roboto;
`;

const ScoreLabelNameWrapper = styled.View`
  border: 0.75px solid black;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
  padding-left: 30px;
  padding-right: 10px;
  box-sizing: border-box;
  height: 100%;
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: right;
`;

const ScoreLabelWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border: 0.75px solid black;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  box-sizing: border-box;
  /* width: 300px; */
  
`;

const ScoreLabelCirclesWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-sizing: border-box;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 140px;

`;

const Score = (props) => {
  const { score } = props;

  const [data] = useReportData();
  const value = data[score.keyInReport];

  return (
    <ScoreLabelWrapper break={!!score.newPage}>
      <ScoreLabelNameWrapper>
        <ScoreLabelName>{score.name}</ScoreLabelName>
      </ScoreLabelNameWrapper>
      <ScoreLabelCirclesWrapper>
        <ScoreColoredCircles valueCode={score.valueCode} value={value} />
        <ScoreLabelText>
          {value} – {score.valueInfo[value]}
        </ScoreLabelText>
      </ScoreLabelCirclesWrapper>
    </ScoreLabelWrapper>
  );
};

export default Score;
