import styled from "@emotion/styled";
import React from "react";
import Header from "./Header";
import Summary from "./Summary";
import ReportSection from "./analysis";
import Footer from "./analysis/Footer";
import { patientReport } from "../shared/patientReortStructure";
import Comments from "./comments";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  > div {
    width: 100%;
    @media screen and (min-width: 1000px) {
      width: 70vw;
    }

    > main {
      margin-top: 0.8125rem;
    }
  }
`;

const WebReport = () => {
  return (
    <Wrapper>
      <div>
        <Header />
        <Comments />
        <Summary />
        <main>
          {patientReport.map((section, index) => (
            <ReportSection {...section} key={index} />
          ))}
        </main>

        <Footer />
      </div>
    </Wrapper>
  );
};

export default WebReport;
