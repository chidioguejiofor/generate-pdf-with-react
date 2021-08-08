import styled from "@emotion/styled";
import React, { MouseEvent as ReactMouseEvent } from "react";
import ReportButton, { LinkButton } from "./ReportButton";

const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  width: 100%;
  justify-content: center;
  background: rgba(32, 123, 228, 0.26);
  button {
    filter: none;
  }

  .content {
    padding-top: 200px;
    text-align: center;
    height: fit-content;
  }
  .result-description {
    display: flex;
    justify-content: center;
    .txt-wrapper {
      border-radius: 20px;
      background: #207be4;
      width: fit-content;
      text-align: center;
      padding: 8px 32px;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 35px;
      color: white;
    }
  }

  .btn-wrapper {
    padding-top: 50px;
    width: 40vw;
    display: flex;
    justify-content: space-between;
  }
`;

const ReportActions = (props) => {
  const stopPropagagation = (
    event: ReactMouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Wrapper onClick={stopPropagagation}>
      <div className="content">
        <div className="result-description">
          <div className="txt-wrapper">View My Results</div>
        </div>
        <div className="btn-wrapper">
          <LinkButton btncolor="#53c7ec" hovercolor="#3c8ca7" href="#">
            View
          </LinkButton>
          <ReportButton btncolor="#53c7ec" hovercolor="#3c8ca7">
            Save
          </ReportButton>
          <ReportButton btncolor="#53c7ec" hovercolor="#3c8ca7">
            Send
          </ReportButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default ReportActions;
