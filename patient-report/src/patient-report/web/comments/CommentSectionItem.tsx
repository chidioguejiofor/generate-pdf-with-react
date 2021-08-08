import styled from "@emotion/styled";
import { useSurveyReportComments } from "../../hooksAndContexts/useSurveyReportComments";
import SingleComment from "./SingleComment";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  h5 {
    height: 33px;
    border: 2px solid #c4c4c4;
    min-width: 143px;
    font-size: 0.875rem;
    line-height: 14px;
    padding-left: 6px;
    display: flex;
    align-items: center;

    color: rgba(0, 0, 0, 0.73);
  }

  .comments {
    margin-left: 18px;
  }
`;

type CommentSectionItemProps = {
  name: string;
  keyInReport: string;
};
const CommentSectionItem = (props: CommentSectionItemProps) => {
  const { name, keyInReport } = props;

  const commentsArray = useSurveyReportComments(keyInReport);

  return (
    <Wrapper>
      <h5>{name}</h5>
      <div className="comments">
        {commentsArray.map(([commentKey, comment], index) => (
          <SingleComment key={index}>
            <strong>{commentKey}</strong> - {comment}
          </SingleComment>
        ))}
      </div>
    </Wrapper>
  );
};

export default CommentSectionItem;
