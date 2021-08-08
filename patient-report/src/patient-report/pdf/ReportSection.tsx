import { Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import { PatientReportSection } from "../shared/patientReortStructure";
import ReportSectionContent from "./ReportSectionContent";

const Wrapper = styled.View`
  margin-top: 10px;
`;

const SectionTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  border: 2px solid #c4c4c4;
  padding: 6px 0;
  max-width: 225px;
  padding-left: 6px;
`;

const SectionImage = styled.Image`
  width: 20px;
  height: auto;
  display: inline-block;
  margin-right: 0.5rem;
`;

const ReportContentWrapper = styled.View``;

const ReportSection = (props: PatientReportSection) => {
  const { title, image, items, borderColor, moveToNewPage } = props;
  return (
    <Wrapper break={moveToNewPage}>
      <SectionTitleWrapper>
        <SectionImage src={image} />
        <Text>{title}</Text>
      </SectionTitleWrapper>
      <ReportContentWrapper>
        {items.map((sectionContent, index) => (
          <ReportSectionContent
            {...sectionContent}
            borderColor={borderColor}
            key={index}
          />
        ))}
      </ReportContentWrapper>
    </Wrapper>
  );
};

export default ReportSection;
