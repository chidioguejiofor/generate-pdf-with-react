import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import "./index.css";

import { MyDocument } from "./MyDocument";

const App = () => (
  <div className="pdf-viewer">
    <PDFViewer className="pdf-viewer__frame">
      <MyDocument />
    </PDFViewer>
  </div>
);

export default App;
