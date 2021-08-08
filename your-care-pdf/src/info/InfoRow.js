import React from "react";
import styled from "@react-pdf/styled-components";

const Wrapper = styled.View`
  width: 100%;
  box-sizing: border-box;
  border: solid ${props=> props.hideBorder? '0': '1px'}  black;
  border-right: none;
  border-left: none;
  border-top: none;
  padding: 3px 0;
`;

const GroupTitle = styled.Text`
  font-size: 12px;
  display: inline;
  font-weight: bold;
  font-family: Roboto;

`;

const Description = styled.Text`
  font-size: 12px;
  display: inline;
  font-weight: normal;
  font-family: Roboto;


`;

function InfoRow(props) {
  const { sectionGroup, hideBorder } = props;

  return (
    <Wrapper hideBorder={hideBorder}>
      <GroupTitle>
        {sectionGroup.title}
        {sectionGroup.bottomText}:
        <Description>
          {" "}
          Identifies those who are independent in ADLs and daily
          decision-making.
        </Description>
      </GroupTitle>
    </Wrapper>
  );
}

export default InfoRow;
