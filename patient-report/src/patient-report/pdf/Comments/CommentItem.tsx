import styled from "@react-pdf/styled-components";
import { useSurveyReportComments } from "../../hooksAndContexts/useSurveyReportComments";

const CommentSectionWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const CommentItemTitleWrapper = styled.View`
  min-width: 143px;
  height: 33px;
  border: 2px solid #c4c4c4;
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  padding-left: 6px;
  margin-right: 13px;

  flex-direction: row;
`;

const CommentItemTitle = styled.Text`
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
  color: black;
  display: block;
`;

const Comments = styled.View``;

const SingleComment = styled.Text`
  font-size: 12px;
  font-family: Roboto;
  font-weight: normal;
  min-width: 367px;
  text-align: left;
`;

const BoldSingleCommentTitle = styled.Text`
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
  margin-right: 1px;
`;

type CommentItemProps = {
  name: string;
  commentKey: string;
};

const CommentItem = (props: CommentItemProps) => {
  const { name, commentKey } = props;

  const commentsArray = useSurveyReportComments(commentKey);

  return (
    <CommentSectionWrapper>
      <CommentItemTitleWrapper>
        <CommentItemTitle>{name}</CommentItemTitle>
      </CommentItemTitleWrapper>
      <Comments>
        {commentsArray?.map(([commentKey, comment], index) => (
          <SingleComment key={index}>
            <BoldSingleCommentTitle>{commentKey}</BoldSingleCommentTitle> -{" "}
            {comment}
          </SingleComment>
        ))}
      </Comments>
    </CommentSectionWrapper>
  );
};

export default CommentItem;
