import React from "react";
import styled from "@react-pdf/styled-components";
import { useReportData } from "../hooksAndContexts/ReportDataContext";

const Wrapper = styled.View`
  border: solid 1px black;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-bottom: 10px;
  width: 100%;
`;

const TextWrapper = styled.View<{isFirst?: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: ${props=> props.isFirst? '0': '7px'};
`;

const LabelWrapper = styled.View`
  display: inline-block;
`;

const Label = styled.Text`
  display: inline;
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
`;

const Value = styled.Text`
  font-weight: normal;
  font-family: Roboto;
  display: inline-block;
  font-size: 13px;

`;

const ValueWrapper = styled.Text`
  margin-left: 10px;
  font-family: Roboto;
  font-weight: normal;
  border: solid 1px black;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-bottom: 1px;
`;


export const Summary = () => {
  const [data] = useReportData();
  return (
    <Wrapper>
      <TextWrapper isFirst>
        <LabelWrapper>
          <Label>This summary sheet is for: </Label>
        </LabelWrapper>
        <ValueWrapper>
          <Value>{data.name}</Value>
        </ValueWrapper>
      </TextWrapper>
      <TextWrapper>
        <LabelWrapper>
          <Label>Date Completed: </Label>
        </LabelWrapper>
        <ValueWrapper>
          <Value>12 Dec 2020</Value>
        </ValueWrapper>
      </TextWrapper>
    </Wrapper>
  );
};
