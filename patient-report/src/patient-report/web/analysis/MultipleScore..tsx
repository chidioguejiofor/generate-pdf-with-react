import React from "react";
import styled from "@emotion/styled";
import SingleScore from "./SingleScore";
import { PatientReportSubItem } from "../../shared/patientReortStructure";
import { useReportData } from "../../hooksAndContexts/ReportDataContext";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 3.5rem;

  .score-item {
    .description {
      text-align: center;
      font-weight: bold;
      margin-top: 1rem;
      font-size: 1.1rem;
    }
  }
`;

type MultipleScoreProps = {
  subItems: PatientReportSubItem[];
};
const MultipleScore = (props: MultipleScoreProps) => {
  const { subItems } = props;
  const [data] = useReportData();
  
  return (
    <Wrapper>
      {subItems.map((subItem, index) => (
        <div className="score-item" key={index}>
          <SingleScore numberOfItems={subItem.numberOfValues} value={data[subItem.keyInReport]} />
          <div className="description">{subItem.name}</div>
        </div>
      ))}
    </Wrapper>
  );
};

export default MultipleScore;
