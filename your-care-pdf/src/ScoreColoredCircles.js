import React from "react";
import styled from "@react-pdf/styled-components";
import { REPORT_COLOR_CODE } from "./reportData/colorCodes";

const ScoreLabelCircle = styled.View`
  width: 11px;
  height: 11px;
  border: 1px solid black;
  margin-left: 1px;
  background-color: ${(props) => props.color || "#FFF"};
  border-radius: 10px;
`;

const ScoreLabelCircleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 3px;
`;
const parseColorArgs = (minimumValue, valueCode, value)=> {
    const typeInfo = REPORT_COLOR_CODE[valueCode];

    const scoreIndex = value - minimumValue;
    let ovalColor = typeInfo.colorCodes[value - minimumValue];
    if (valueCode === "THREE_WITH_TWO_DOTS" && +scoreIndex === 2) {
      ovalColor = typeInfo.colorCodes[2];
    }
    const circles = Array(typeInfo.numberOfCircles).fill(null);

    return {
        ovalColor, scoreIndex, circles
    }
}
const ScoreColoredCircles = (props) => {
  const { valueCode, value, minimumValue = 0 } = props;
  const { ovalColor, scoreIndex, circles}  = parseColorArgs(minimumValue, valueCode, value)
  const parseColor = (index) => {
    if (index <= scoreIndex) {
      return ovalColor;
    }
    return "white";
  };
  return (
    <ScoreLabelCircleWrapper>
        {circles.map((a, index)=> (

             <ScoreLabelCircle key={index} color={parseColor(index)} />
        ))}
    </ScoreLabelCircleWrapper>
  );
};

export default ScoreColoredCircles;
