import React from "react";
import { Document, Font } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import {
  selfReportStructure,
  GROUP_ORDER,
} from "./reportData/selfReportObject";
import DoctorPDFComments from "./comments";
import { ReportDataProvider } from "./context/ReportDataContext";
import { mockFlattenedReport } from "./reportData/mockFlattenedReport";
import VALUE_TO_TEXT_MAPPER from "./reportData/valueToTextMappers";
import Header, { Gap } from "./Header";
import ReportSection from "./ReportSection";
import ReportInfoSection from "./info/ReportInfoSection";
import FootNote from "./info/FootNote";

Font.registerHyphenationCallback((word) => [word]);
const ROBOTO_FONT_CONFIG = {
  family: "Roboto",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc9AMP6lQ.ttf",
      fontStyle: "normal",
    },
    {
      src: "http://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzcXKMny.ttf",
      fontStyle: "italic",
      fontWeight: "normal",
    },
    {
      src: "http://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc9AMP6lQ.ttf",
      fontStyle: "normal",
      fontWeight: "bold",
    },
  ],
};
Font.register(ROBOTO_FONT_CONFIG);
const Page = styled.Page`
  padding: 30px 40px;
`;
export const MyDocument = () => {
  const data = mockFlattenedReport;
  const livingArrangement = VALUE_TO_TEXT_MAPPER.A8[data.A8];
  const livesWith = VALUE_TO_TEXT_MAPPER.A9[data.A9];
  const maritalStatus = VALUE_TO_TEXT_MAPPER.A4[data.A4];
  const completionDate = new Date(data.A7);
  return (
    <Document>
      <ReportDataProvider value={data}>
        {/* <Page size="A4">
        </Page> */}
        <Page size="A4" wrap>
          <DoctorPDFComments />

          <Header
            completionDate={completionDate.toDateString()}
            maritalStatus={maritalStatus}
            livingArrangement={livingArrangement}
            name={data.name}
            livesWith={livesWith}
          />

          {GROUP_ORDER.map((sectionTitle, index) => (
            <React.Fragment key={index}>
              <ReportSection
                title={sectionTitle}
                sectionStructure={selfReportStructure[sectionTitle]}
              />
            </React.Fragment>
          ))}

          <Gap />

          {GROUP_ORDER.map((sectionTitle, index) => (
            <React.Fragment key={index}>
              <ReportInfoSection
                title={sectionTitle}
                sectionStructure={selfReportStructure[sectionTitle]}
              />
            </React.Fragment>
          ))}

          <FootNote />
        </Page>
      </ReportDataProvider>
    </Document>
  );
};
