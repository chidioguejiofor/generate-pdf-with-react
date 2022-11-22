import React from "react";
import styled from "@react-pdf/styled-components";

const Heading = styled.Text`
  font-size: 13px;
  font-weight: bold;
  font-family: Roboto;
  margin-top: 80px;
`;

const SubHeading = styled.Text`
  font-size: 13px;
  font-weight: 100;
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: Roboto;
  font-weight: normal;
`;

const InfoWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Gap = styled.View`
  margin-top:120px;
`;

const InfoItem = styled.View`
  display: flex;
  flex-direction: row;
`;

const InfoTextLeft = styled.Text`
  font-family: Roboto;
  font-weight: normal;
  font-size: 11px;
  width: 45%;
  margin-bottom: 5px;
`;

const InfoTextRight = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 11px;
`;

const ReportDescription = styled.Text`
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid black;
  padding: 5px 7px;
`;

const Header = (props) => {
  const { completionDate, maritalStatus, livingArrangement, name, livesWith } =
    props;

  return (
    <>
      <Heading>Self-Reported Function and Symptom Report</Heading>
      <SubHeading>Self-Reported Check-Up Assessment</SubHeading>
      <InfoWrapper>
        <InfoItem>
          <InfoTextLeft>Self-assessment completion date:</InfoTextLeft>
          <InfoTextRight>{completionDate}</InfoTextRight>
        </InfoItem>
        <InfoItem>
          <InfoTextLeft>Person’s name:</InfoTextLeft>
          <InfoTextRight>{name}</InfoTextRight>
        </InfoItem>
        <InfoItem>
          <InfoTextLeft>Marital status:</InfoTextLeft>
          <InfoTextRight>{maritalStatus}</InfoTextRight>
        </InfoItem>
        <InfoItem>
          <InfoTextLeft>Living Arrangement:</InfoTextLeft>
          <InfoTextRight>{livingArrangement}</InfoTextRight>
        </InfoItem>
        <InfoItem>
          <InfoTextLeft>Lives With:</InfoTextLeft>
          <InfoTextRight>{livesWith}</InfoTextRight>
        </InfoItem>
      </InfoWrapper>
      <ReportDescription>
        The purpose of this clinical summary is to help clinicians to quickly
        identify and assess health problems so that they can be considered in
        diagnosis, intervention, referral, and care planning
      </ReportDescription>
    </>
  );
};

export default Header;
