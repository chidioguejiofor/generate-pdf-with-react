import React from "react";
import styled from "@react-pdf/styled-components";
import SingleScore from "./SingleScore";
import SummaryTextParser from "./SummaryTextParser";

const ScoreWrapper = styled.View`
  width: 227px;
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
  max-width: 110px;
`;

const SummaryTextWrapper = styled.Text`
  font-size: 11px;
  width: 169px;
  height: 100%;
  background: #e5e5e5;
  padding: 11px;
`;

const DoubleColumnContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContentWrapper = styled.View`
  width: 340px;
`;

const ScoreNameAndScoreWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ScoreDescription = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  margin-top: 10px;
`;

const SingleScoreItemStructure = (props) => {
  const {
    username,
    valueDescription,
    name,
    description,
    summaryText,
    score,
    numberOfItems,
  } = props;

  return (
    <DoubleColumnContent>
      <LeftContentWrapper>
        <ScoreNameAndScoreWrapper>
          <SectionContentItem>{name}</SectionContentItem>
          <ScoreWrapper>
            <SingleScore numberOfItems={numberOfItems} value={score} />
          </ScoreWrapper>
        </ScoreNameAndScoreWrapper>
        <ScoreDescription>{description}</ScoreDescription>
      </LeftContentWrapper>
      <SummaryTextWrapper wrap>
        <SummaryTextParser
          username={username}
          valueDecription={valueDescription}
          summaryText={summaryText}
        />
      </SummaryTextWrapper>
    </DoubleColumnContent>
  );
};

export default SingleScoreItemStructure;
