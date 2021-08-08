import styled from "@emotion/styled";
import React, { useState, MouseEvent as ReactMouseEvent } from "react";
import Button from "./ReportButton";
import ReportActions from "./ReportActions";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: Roboto;
  position: relative;
  padding-top: 17px;
  text-align: center;
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
  }

  img {
    position: absolute;
    z-index: -1;
    left: 15%;
    top: 10%;
  }
  main {
    width: 100%;

    > .btn-group {
      padding-top: 50px;
      > div {
        min-height: 64px;
        width: 50vw;
        display: flex;
        justify-content: space-between;
      }

      display: flex;
      justify-content: center;
    }
  }
`;

type ReportTypes = "patient" | "doctor";

const ReportEntryPage = () => {
  const [selectedView, setSelectedView] = useState<ReportTypes | null>(null);
  const handleClickOutSideActions = () => {
    setSelectedView(null);
  };

  const handleBtnClick = (type: ReportTypes) => (
    event: ReactMouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedView(type);
  };

  return (
    <Wrapper onClick={handleClickOutSideActions}>
      <h3>Self-Reported Check-Up Assessment Results</h3>
      <main>
        <img width='70%' src="report-backgroud.png" alt="report" />
        <div className="btn-group">
          <div>
            {!selectedView && (
              <>
                <Button
                  disabled={selectedView === "doctor"}
                  onClick={handleBtnClick("patient")}
                >
                  View My Result
                </Button>
                <Button
                  disabled={selectedView === "patient"}
                  onClick={handleBtnClick("doctor")}
                >
                  Share my results with a health professional
                </Button>
              </>
            )}
          </div>
        </div>

        {!!selectedView && <ReportActions type={selectedView} />}
      </main>
    </Wrapper>
  );
};

export default ReportEntryPage;
