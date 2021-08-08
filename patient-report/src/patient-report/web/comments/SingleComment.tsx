import styled from "@emotion/styled";
import { ReactNode } from "react";

const Wrapper = styled.div`
  font-size: 0.875rem;
`;

type SingleCommentProps = {
  children: ReactNode;
};
const SingleComment = (props: SingleCommentProps) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

export default SingleComment;
