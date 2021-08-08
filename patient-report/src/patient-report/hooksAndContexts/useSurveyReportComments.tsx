import { useReportData } from "./ReportDataContext";
import { commentSectionMapper } from "../shared/commentKeys";

export const useSurveyReportComments = (
  commentKey: string
): [string, string][] => {
  const [, commentObject] = useReportData();

  const singleCommentArray = commentSectionMapper[commentKey] || [];
  const commentsArray = singleCommentArray
    ?.map((commentObjectItem) => {
      const key: string = commentObjectItem.keyInReport;
      const commentString = commentObject[key];
      if (commentString) {
        return [key, commentString as string];
      }
      return null;
    })
    .filter((comment) => comment);

  return commentsArray as [string, string][];
};
