import {createContext, useContext} from 'react';


const ReportDataContext = createContext(null);

export const ReportDataProvider = ReportDataContext.Provider;

export const useReportData = ()=> {
    const data = useContext(ReportDataContext);

    if(!data){
        throw new Error('This hook requires a ReportDataProvider in Tree')
    }

    return [data];
}