import React from "react";
import WebReport from "./web";
import PDFReport from "./pdf";
import { ReportDataProvider } from "./hooksAndContexts/ReportDataContext";
import { mockFlattenedReport } from "./shared/mockFlattenedReport";
type PatientReportProps = {
  type: "web" | "pdf";
};

const REPORTS_MAPPER = {
  web: WebReport,
  pdf: PDFReport,
};
const PatientReport = (props: PatientReportProps) => {
  const { type } = props;
  const Component = REPORTS_MAPPER[type];
  return (
    <ReportDataProvider value={[mockFlattenedReport, mockFlattenedReport]}>
      <Component />
    </ReportDataProvider>
  );
};

export default PatientReport;
