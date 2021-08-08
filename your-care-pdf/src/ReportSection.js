import React from "react";
import styled from "@react-pdf/styled-components";
import ScoreGroup from "./ScoreGroup";
import {GROUP_TO_BREAK_TO_NEW_PAGE} from './reportData/selfReportObject'

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding-left: ${props=> props.nested? '40px' : '0'} ;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding: 6px 0;
  font-family: Roboto;
  text-align: left;
  box-sizing: border-box;
  padding-left: 10px;
  background-color: #e7e6e6;
  padding-top: 1px;
  padding-bottom: 1px;
`;

const ReportSection = (props) => {
  const { title, sectionStructure,nested=false  } = props;


  return (
    <Wrapper nested={nested} break={GROUP_TO_BREAK_TO_NEW_PAGE.has(title)}>
      <Title>{title}</Title>
      <Wrapper>
        {sectionStructure.map((sectionGroup, index) => {
          return (
            <React.Fragment key={index}>
              <ScoreGroup nested={nested}  sectionGroup={sectionGroup} />
              {sectionGroup.nested && (
                <ReportSection
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
};

export default ReportSection;
