import styled from "@react-pdf/styled-components";
import React from "react";
import TextParser from "../shared/TextParser";

const InnerText = styled.Text``;
const NameText = styled.Text`
  font-weight: bold;
  font-family: Roboto;
`;
const ValueText = styled.Text`
  font-weight: normal;
  font-style: italic;
  font-family: Roboto;
`;
const PARSED_TEXT_MAPPER = {
  name: NameText,
  value: ValueText,
};
type SummaryTextParserProps = {
  summaryText: string;
  username: string;
  valueDecription: string;
};
export const SummaryTextParser = (props: SummaryTextParserProps) => {
  const { summaryText, username, valueDecription } = props;

  const nameAndValue = {
    name: username,
    value: valueDecription,
  };
  return (
    <TextParser text={summaryText} ParentComponent={InnerText}>
      {(part, result) => {
        if (!result) return part;

        const key = result[1];
        const TextComponent =
          PARSED_TEXT_MAPPER[key] || PARSED_TEXT_MAPPER.name;

        return <TextComponent>{nameAndValue[key]} </TextComponent>;
      }}
    </TextParser>
  );
};

export default SummaryTextParser;
