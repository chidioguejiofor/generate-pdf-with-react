import styled from "@emotion/styled";
import React from "react";
import { PatientReportSection } from "../../shared/patientReortStructure";
import ReportSectionContent from "./ReportSectionContent";

const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    border: 2px solid ${(props) => props.color || "#c4c4c4"};
    box-sizing: border-box;
    min-width: 14.0625rem;
    width: fit-content;
    padding: 0.75rem 1rem;
    margin-bottom: 2rem;
    img {
      width: 40px;
      height: auto;
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
`;
const ReportSection = (props: PatientReportSection) => {
  const { title, image, items, borderColor } = props;
  return (
    <Wrapper color={borderColor}>
      <section className="title">
        <img src={image} alt={title} />
        <span>{title}</span>
      </section>
      {items.map((sectionContent, index) => (
        <ReportSectionContent
          {...sectionContent}
          borderColor={borderColor}
          key={index}
        />
      ))}
    </Wrapper>
  );
};

export default ReportSection;
