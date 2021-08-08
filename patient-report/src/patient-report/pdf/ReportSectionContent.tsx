import React from "react";
import styled from "@react-pdf/styled-components";

import Score from "./Score";
import { ReportSectionContentProps } from "../shared/patientReortStructure";

const Wrapper = styled.View`
  margin-top: 10px;
`;

const ReportSectionContent = (props: ReportSectionContentProps) => {
  const { moveToNewPage, ...others } = props;

  return (
    <Wrapper break={moveToNewPage}>
      <Score {...others} />
    </Wrapper>
  );
};

export default ReportSectionContent;
