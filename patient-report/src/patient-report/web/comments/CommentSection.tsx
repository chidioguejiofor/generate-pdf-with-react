import styled from "@emotion/styled";
import { PatientReportItem } from "../../shared/patientReortStructure";
import CommentSectionItem from "./CommentSectionItem";

const Wrapper = styled.div`
  > h4 {
    background: #e5e5e5;
    padding: 10px 13px;
    border-radius: 6px;
    margin-bottom: 4px;
  }
`;

type CommentSectionProps = {
  title: string;
  sectionItems: PatientReportItem[];
};
const CommentSection = (props: CommentSectionProps) => {
  const { title, sectionItems } = props;
  return (
    <Wrapper>
      <h4>{title}</h4>
      {sectionItems.map((sectionItem, index) => (
        <CommentSectionItem
          key={index}
          name={sectionItem.name}
          keyInReport={sectionItem.keyInReport}
        />
      ))}
    </Wrapper>
  );
};

export default CommentSection;
