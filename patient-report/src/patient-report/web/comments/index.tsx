import styled from "@emotion/styled";
import CommentSection from "./CommentSection";
import { patientReport } from "../../shared/patientReortStructure";

const Wrapper = styled.div`
  > h3 {
    text-align: center;
    font-size: 1rem;
  }
`;

const Comments = () => {
  return (
    <Wrapper>
      <h3>Additional Comments</h3>

      <div>
        {patientReport.map((section, index) => (
          <CommentSection
            key={index}
            title={section.title}
            sectionItems={section.items}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Comments;
