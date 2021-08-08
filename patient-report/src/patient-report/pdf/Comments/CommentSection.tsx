import styled from "@react-pdf/styled-components";
import { PatientReportItem } from "../../shared/patientReortStructure";
import CommentItem from "./CommentItem";

const Wrapper = styled.View``;

const TitleWrapper = styled.View`
  padding: 6px;
  background: #e5e5e5;
  border-radius: 2px;
  margin-bottom: 5px;
`;

const TitleText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  font-family: Roboto;
  font-weight: bold;
`;

type CommentSectionProps = {
  title: string;
  items: PatientReportItem[];
};

const CommentSection = (props: CommentSectionProps) => {
  const { title, items } = props;
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleText>{title}</TitleText>
      </TitleWrapper>

      {items.map((item, index) => (
        <CommentItem commentKey={item.keyInReport} name={item.name} key={index} />
      ))}
    </Wrapper>
  );
};

export default CommentSection;
