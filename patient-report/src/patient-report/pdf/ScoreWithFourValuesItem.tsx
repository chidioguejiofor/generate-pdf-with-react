import React from "react";
import styled from "@react-pdf/styled-components";
import SingleScore from "./SingleScore";
import { useReportData } from "../hooksAndContexts/ReportDataContext";
import SummaryTextParser from "./SummaryTextParser";

const ScoreWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  margin-bottom: ${(props) => (props.last ? "0" : "10px")};
`;
const SectionContentItem = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  border: 1px solid #000000;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 81px;
  margin-bottom: 16px;
  width: 180px;
`;

const SummaryTextWrapper = styled.Text`
  font-size: 11px;
  width: 129px;
  height: 100%;
  background: #e5e5e5;
  padding: 11px;
  max-height: 120px;
`;

const DoubleColumnContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContentWrapper = styled.View`
  width: 380px;
`;

const ScoreNameAndScoreWrapper = styled.View`
  width: 350px;
`;

const ScoreDescription = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  margin-top: 10px;
`;

const ScoreText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
`;

const ScoreTextWrapper = styled.View`
  width: 45%;
`;

const transformSubItems = (subItems: Record<string, any>[]) => {
  let tempArr: Record<string, any>[] = [];
  const finalArr: Record<string, any>[] = [];

  for (const [index, item] of Object.entries(subItems)) {
    tempArr.push(item);
    if (+index % 2 === 1) {
      finalArr.push(tempArr);
      tempArr = [];
    }
  }

  return finalArr;
};

type ScoreWithFourValuesItemProps = {
  name: string;
  description: string;
  summaryText: string;
  subItems: Record<string, any>[];
  valueDescription: string;
};
const ScoreWithFourValuesItem = (props: ScoreWithFourValuesItemProps) => {
  const { name, description, summaryText, subItems, valueDescription } = props;

  const [data] = useReportData();
  const transformedSubItems = transformSubItems(subItems);

  return (
    <DoubleColumnContent>
      <LeftContentWrapper>
        <ScoreNameAndScoreWrapper>
          <SectionContentItem>{name}</SectionContentItem>
          {transformedSubItems.map((twoItems, index) => {
            return (
              <ScoreWrapper
                last={transformedSubItems.length - 1 === index}
                key={index}
              >
                {twoItems.map((item, index) => (
                  <ScoreTextWrapper key={index}>
                    <SingleScore
                      numberOfItems={item.numberOfValues}
                      value={data[item.keyInReport]}
                    />
                    <ScoreText>{item.name}</ScoreText>
                  </ScoreTextWrapper>
                ))}
              </ScoreWrapper>
            );
          })}
        </ScoreNameAndScoreWrapper>
        <ScoreDescription>{description}</ScoreDescription>
      </LeftContentWrapper>
      <SummaryTextWrapper wrap>
        <SummaryTextParser
          username={data.name}
          valueDecription={valueDescription}
          summaryText={summaryText}
        />
      </SummaryTextWrapper>
    </DoubleColumnContent>
  );
};

export default ScoreWithFourValuesItem;
