import React from "react";
import { useReportData } from "../../hooksAndContexts/ReportDataContext";
import { PatientReportSubItem } from "../../shared/patientReortStructure";
import MultipleScore from "./MultipleScore.";
import SingleScore from "./SingleScore";

type ScoreProps = {
  subItems?: PatientReportSubItem[];
  keyInReport?: string | null;
  valueMapper?: string[];
};

const Score = (props: ScoreProps) => {
  const { subItems, keyInReport, valueMapper } = props;
  const [data] = useReportData();

  if (subItems) {
    return <MultipleScore subItems={subItems as PatientReportSubItem[]} />;
  }
  return (
    <SingleScore
      numberOfItems={valueMapper?.length || 1}
      value={data[keyInReport || ""]}
    />
  );
};

export default Score;
