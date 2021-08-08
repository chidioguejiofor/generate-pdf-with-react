import React, { Fragment } from "react";

export type TextParserProps = {
  /**
   * This is the text that is to be parsed
   */
  text: string;
  regex?: RegExp;
  ParentComponent: React.FC<{ children: React.ReactNode }>;
  children: (part: string, result?: RegExpExecArray| null) => React.ReactNode;
};

const DEFAULT_REGEX_HIGHLIGHTER = new RegExp("({%.+?%})", "gi");

/**
 * This component splits the text string passed to it by spaces
 * and then checks if it matches a specified regex.
 *
 * By default it checks for `{%(.+)%}` which can be used to parse
 * string with {%value%} place holders.
 *
 * It takes a children prop that is a function that returns a ReactNode.
 *
 * The idea is that the caller of this component can do whatever he
 * wants with it.
 *
 * @param props The props.
 */
export function TextParser(props: TextParserProps) {
  const {
    text,
    regex = DEFAULT_REGEX_HIGHLIGHTER,
    children,
    ParentComponent,
  } = props;

  const parts = text.split(regex);

  return (
    <ParentComponent>
      {parts.map((part, index) => {
         const percNameMatcher = new RegExp("{%(.+?)%}", "gm");
         let  result = percNameMatcher.exec(part);
        return (
        <Fragment key={index}>{children(part, result)}</Fragment>
      )})}
    </ParentComponent>
  );
}


export default TextParser;
