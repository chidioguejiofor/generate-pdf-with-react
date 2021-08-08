import {
  GROUP_ORDER,
  selfReportStructure,
} from "../reportData/selfReportObject";
import { View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import ReportInfoSection from "./ReportCommentSection";
import React from "react";

const HeadingText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  font-family: Roboto;
`;

const DoctorPDFComments = () => {
  return (
    <View>
      <HeadingText>
        Self-Reported Check-Up Assessment – Additional Comments
      </HeadingText>
      {GROUP_ORDER.map((sectionTitle, index) => (
        <React.Fragment key={index}>
          <ReportInfoSection
            title={sectionTitle}
            sectionStructure={selfReportStructure[sectionTitle]}
          />
        </React.Fragment>
      ))}
    </View>
  );
};

export default DoctorPDFComments;
