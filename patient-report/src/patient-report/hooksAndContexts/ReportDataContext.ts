import { createContext, useContext } from "react";

type ReportDataType = Record<string, any>[];
const ReportDataContext = createContext<ReportDataType>([]);

export const ReportDataProvider = ReportDataContext.Provider;

export const useReportData = () => {
  const [data, comments] = useContext<ReportDataType>(ReportDataContext);

  if (!data) {
    throw new Error("This hook requires a ReportDataProvider in Tree");
  }

  return [data, comments];
};
