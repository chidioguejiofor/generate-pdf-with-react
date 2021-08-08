import styled from "@react-pdf/styled-components";
import { patientReport } from "../../shared/patientReortStructure";

import CommentSection from "./CommentSection";

const Wrapper = styled.View`
  margin-top: 10px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-family: Roboto;
  text-align: center;
  font-size: 12px;
  margin-bottom: 5px;
  margin-top: 3px;
`;

const Comment = () => {
  return (
    <Wrapper break>
      <Title>Additional Comments</Title>

      {patientReport.map((sections, index) => (
        <CommentSection
          key={index}
          title={sections.title}
          items={sections.items}
        />
      ))}
    </Wrapper>
  );
};

export default Comment;
