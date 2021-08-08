import React from "react";
import styled from "@react-pdf/styled-components";
import InfoRow from "./InfoRow";

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding-left: ${(props) => (props.nested ? "40px" : "0")};
  margin-top: 10px;
  margin-bottom: ${(props) => (props.nested ? "10px" : "0")}; 
  font-family: Roboto; 

  &:first-of-type {
    margin-top: 0;
  }
`;

const Title = styled.Text`
  font-size: 11px;
  font-family: Roboto; 
  font-weight: bold;
  text-align: left;
  box-sizing: border-box;
  padding-left: 10px;
  background-color: #f2f2f2;
  padding-top: 1px;
  padding-bottom: 1px;
  border: 1px solid black;
  border-right: none;
  border-left: none;
  padding: 3px 0;
`;

function ReportInfoSection(props) {
  const { title, sectionStructure, nested = false } = props;

  return (
    <Wrapper nested={nested}>
      <Title>{title}</Title>
      <Wrapper>
        {sectionStructure.map((sectionGroup, index) => {
          return (
            <React.Fragment key={index}>
              <InfoRow
                hideBorder={index === sectionStructure.length - 1}
                sectionGroup={sectionGroup}
              />
              {sectionGroup.nested && (
                <ReportInfoSection
                  title={sectionGroup.nested.subTableTitle}
                  sectionStructure={sectionGroup.nested.rows}
                  nested
                />
              )}
            </React.Fragment>
          );
        })}
      </Wrapper>
    </Wrapper>
  );
}

export default ReportInfoSection;
