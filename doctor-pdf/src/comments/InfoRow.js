import React from "react";
import styled from "@react-pdf/styled-components";

const Wrapper = styled.View`
  width: 100%;
  box-sizing: border-box;
  border: solid ${(props) => (props.hideBorder ? "0" : "1px")} black;
  border-right: none;
  border-left: none;
  border-top: none;
  padding: 3px 0;
`;

const GroupTitle = styled.Text`
  font-size: 12px;
  display: inline;
  font-weight: bold;
  font-family: Roboto;
`;
const CommentItem = styled.View`
  padding-left: 10px;
`;

const CommentText = styled.Text`
  font-size: 10px;
  display: inline;
  font-weight: normal;
  font-family: Roboto;
  margin-top: 5px;
`;

function InfoRow(props) {
  const { sectionGroup, hideBorder } = props;

  return (
    <Wrapper hideBorder={hideBorder}>
      <GroupTitle>
        {sectionGroup.title}
        {sectionGroup.bottomText}:
        {/* <Description>
          {" "}
          Identifies those who are independent in ADLs and daily
          decision-making.
        </Description> */}
      </GroupTitle>

      <CommentItem>
        <CommentText>
          - [Free-text comments from questions, if entered. May be blank if no
          comments are entered (this is optional).]
        </CommentText>

        <CommentText>
          - [Free-text comments from questions, if entered. May be blank if no
          comments are entered (this is optional).]
        </CommentText>
      </CommentItem>
    </Wrapper>
  );
}

export default InfoRow;
