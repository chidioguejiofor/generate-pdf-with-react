import SingleScoreItemStructure from "./SingleScoreItemStructure";
import ScoreWithFourValuesItem from "./ScoreWithFourValuesItem";
import NumericScoreStructure from "./NumericScoreStructure";

import { useReportData } from "../hooksAndContexts/ReportDataContext";
import { ReportSectionContentProps } from "../shared/patientReortStructure";

const ReportSectionContent = (props: ReportSectionContentProps) => {
  const {
    name,
    description,
    keyInReport,
    valueMapper = [],
    subItems,
    summaryText,
    hasNumericValue,
  } = props;
  const [data] = useReportData();
  const score = data[keyInReport];
  const valueDescription = valueMapper[score];
  if (hasNumericValue) {
    return (
      <NumericScoreStructure
        username={data.name}
        score={score}
        valueDescription={valueDescription}
        summaryText={summaryText}
      />
    );
  } else if (subItems) {
    return (
      <ScoreWithFourValuesItem
        name={name}
        subItems={subItems}
        valueDescription={valueDescription}
        description={description}
        summaryText={summaryText}
      />
    );
  }

  return (
    <SingleScoreItemStructure
      username={data.name}
      name={name}
      score={score}
      valueDescription={valueDescription}
      description={description}
      summaryText={summaryText}
      numberOfItems={valueMapper.length}
    />
  );
};

export default ReportSectionContent;
