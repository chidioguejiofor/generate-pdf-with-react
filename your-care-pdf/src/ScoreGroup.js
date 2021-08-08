import React from "react";
import styled from "@react-pdf/styled-components";
import { useReportData } from "./context/ReportDataContext";
import Score from "./ScoreLabel";
import SectionScore from "./SectionScore";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  border: 0.75px solid black;
  border-bottom: 1px solid transparent;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
`;

const Title = styled.Text`
  font-family: Roboto;

  font-size: 12px;
  font-weight: bold;
  text-align: left;
  box-sizing: border-box;
  font-family: Roboto;
  /* background: red; */
  width: 150px;
  padding-left: 10px;

`;

const SubTitle = styled.Text`
  font-size: 9px;
  font-weight: bold;
  text-align: left;
  font-family: Roboto;
  box-sizing: border-box;
  width: 100%;
  padding-left: 10px;
`;

const TitleWrapper = styled.View`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-grow: 1;
  background-color: #f2f2f2;
  /* background: orange; */
  flex-wrap: wrap;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  text-align: right;
  border: 0.75px solid black;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
`;

const ScoreWrapper = styled.View`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  width: 280px;
`;

const ScoreGroup = (props) => {
  const { sectionGroup, nested } = props;
  const [data] = useReportData();

  const sectionScore = data[sectionGroup.keyInReport];

  
  return (
    <Wrapper break={sectionGroup.newPage}>
      <TitleWrapper>
        <Title wrap>{sectionGroup.title}</Title>
        <SubTitle>{sectionGroup.bottomText}</SubTitle>
      </TitleWrapper>

      <ScoreWrapper>
        {!nested && <SectionScore
          value={sectionScore}
          valueInfo={sectionGroup.valueInfo}
          valueCode={sectionGroup.valueCode}
        />}
        {sectionGroup.values.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </ScoreWrapper>
    </Wrapper>
  );
};

export default ScoreGroup;
