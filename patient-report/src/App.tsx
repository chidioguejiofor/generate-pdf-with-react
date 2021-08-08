import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PatientReport from "./patient-report/PatientReport";
import ReportEntry from "./patient-report/landing";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/landing"
          render={() => {
            return <ReportEntry />;
          }}
        />
        <Route
          path="/pdf"
          render={() => {
            return <PatientReport type="pdf" />;
          }}
        />
        <Route
          path="/"
          render={() => {
            return <PatientReport type="web" />;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
