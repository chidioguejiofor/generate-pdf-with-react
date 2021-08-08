import React from "react";
import Header from "./Header";
import { Summary } from "./Summary";
import ReportSection from "./ReportSection";
import { ReportDataProvider } from "../hooksAndContexts/ReportDataContext";
import { mockFlattenedReport } from "../shared/mockFlattenedReport";
import { patientReport } from "../shared/patientReortStructure";
import Footer from "./Footer";
import CommentSection from "./Comments";
import { View } from "@react-pdf/renderer";

const Report = () => {
  return (
    <ReportDataProvider value={[mockFlattenedReport, mockFlattenedReport]}>
      <Header />
      <Summary />
      <View>
        {patientReport.map((section, index) => (
          <ReportSection {...section} key={index} />
        ))}
      </View>
      <Footer />
      <CommentSection />
    </ReportDataProvider>
  );
};

export default Report;
