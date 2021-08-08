import React from "react";
import styled from "@react-pdf/styled-components";
import { Document, PDFViewer, Font } from "@react-pdf/renderer";
import Report from "./Report";

Font.registerHyphenationCallback((word) => [word]);

const ROBOTO_FONT_CONFIG = {
  family: "Roboto",
  fonts: [
    {
      src:
        "http://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc9AMP6lQ.ttf",
      fontStyle: "normal",
    },
    {
      src:
        "http://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzcXKMny.ttf",
      fontStyle: "italic",
      fontWeight: "normal",
    },
    {
      src:
        "http://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc9AMP6lQ.ttf",
      fontStyle: "normal",
      fontWeight: "bold",
    },
  ],
};
Font.register(ROBOTO_FONT_CONFIG);

const Page = styled.Page`
  padding: 30px 40px;
`;

const MyDocument = () => {
 
  return (
    <Document>
      <Page size="A4">
        <Report />
      </Page>
    </Document>
  );
};

const PDFPage = () => (
  <div className="pdf-viewer">
    <PDFViewer className="pdf-viewer__frame">
      <MyDocument />
    </PDFViewer>
  </div>
);

export default PDFPage;
