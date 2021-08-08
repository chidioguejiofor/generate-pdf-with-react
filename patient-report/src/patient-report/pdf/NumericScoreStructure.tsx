import styled from "@react-pdf/styled-components";
import { View } from "@react-pdf/renderer";
import React from "react";
import NumericScoreLabel from "./NumericScoreLabel";
import { SummaryTextParser } from "./SummaryTextParser";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SummaryTextWrapper = styled.Text`
  font-size: 11px;
  font-family: Roboto;
  font-weight: normal;
  width: 350px;
  background: #e5e5e5;
  padding: 6px;
`;
type NumericScoreStructureProps = {
  username: string;
  score: number;
  valueDescription: string;
  summaryText: string;
};

const NumericScoreStructure = (props: NumericScoreStructureProps) => {
  const { username: name, score, summaryText, valueDescription } = props;
  return (
    <Wrapper>
      <NumericScoreLabel name={name} score={score} />
      <View>
        <SummaryTextWrapper wrap>
          <SummaryTextParser
            username={name}
            valueDecription={valueDescription}
            summaryText={summaryText}
          />
        </SummaryTextWrapper>
      </View>
    </Wrapper>
  );
};

export default NumericScoreStructure;
