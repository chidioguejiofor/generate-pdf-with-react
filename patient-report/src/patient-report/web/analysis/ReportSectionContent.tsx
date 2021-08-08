import styled from "@emotion/styled";
import React from "react";
import { useReportData } from "../../hooksAndContexts/ReportDataContext";
import Score from "./Score";
import { TextParser } from "../../shared/TextParser";
import { ReportSectionContentProps } from "../../shared/patientReortStructure";

const SectionContentItem = styled.div`
  font-weight: bold;
  height: fit-content;
  font-size: 1rem;
  line-height: 1rem;
  mix-blend-mode: normal;
  > div:last-of-type {
    border: 1px solid ${(props) => props.color || "#000"};
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.73);
    width: fit-content;
    min-width: 6.5rem;
    padding: 1rem;
    text-align: center;
  }
  h5 {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;
type WrapperProps = {
  color?: string;
  hasnumericvalue?: boolean;
  hassubitems: boolean;
};
const Wrapper = styled.div<WrapperProps>`
  font-family: Roboto;
  min-height: 3.5rem;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 21.7fr 60.65fr 17.69fr;
  width: 100%;
  justify-content: space-between;
  padding: 0 1rem;
  margin-bottom: 2rem;
  > .summary {
    grid-column: ${(props) => (props.hasnumericvalue ? "2 / 4" : "3")};
    grid-row: ${(props) => (props.hasnumericvalue ? "1 / 3" : "1 / 3")};
    display: flex;
    align-items: center;
    height: ${(props) => (props.hasnumericvalue ? "auto" : "fit-content")};
    background: #e5e5e5;
    padding: 0.5rem 1rem;

    .matched-text {
      font-weight: bold;
      display: inline;

      &.value {
        font-style: italic;
        font-weight: normal;
      }
    }
  }

  > .value-description {
    grid-column: 1 / 3;
    grid-row: ${(props) => (props.hassubitems ? 3 : 2)};
    padding-left: 0.75rem;
  }

  > .score-wrapper {
    ${(props) =>
      props.hassubitems &&
      `
      grid-column: 1 / 3;
        grid-row: 2;
    `}
  }
`;

const Span = styled.span``;

const ReportSectionContent = (props: ReportSectionContentProps) => {
  const {
    name,
    borderColor,
    description,
    keyInReport,
    valueMapper = [],
    subItems,
    summaryText,
    hasNumericValue = false,
  } = props;
  const [data] = useReportData();
  const value = data[keyInReport] || 0;
  const nameAndValue = {
    name: data.name,
    value: valueMapper[value] || "",
  };

  return (
    <Wrapper
      color={borderColor}
      hassubitems={!!subItems}
      hasnumericvalue={hasNumericValue}
    >
      <SectionContentItem>
        {hasNumericValue ? (
          <>
            <h5>{name}</h5>
            <div>{data[keyInReport || ""] || 0}</div>
          </>
        ) : (
          <>
            <div>{name}</div>
          </>
        )}
      </SectionContentItem>
      <div className="score-wrapper">
        {!hasNumericValue && (
          <Score
            keyInReport={keyInReport}
            valueMapper={valueMapper}
            subItems={subItems}
          />
        )}
      </div>

      <div className="summary">
        <TextParser ParentComponent={Span} text={summaryText}>
          {(part, result) => {
            if (!result) return part;
            const key = result[1];

            return (
              <span className={`matched-text ${key}`}>
                {" "}
                {nameAndValue[key]}{" "}
              </span>
            );
          }}
        </TextParser>
      </div>
      <div className="value-description">{description}</div>
    </Wrapper>
  );
};

export default ReportSectionContent;
