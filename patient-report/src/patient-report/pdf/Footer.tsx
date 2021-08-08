import styled from "@react-pdf/styled-components";

const Wrapper = styled.View`
  margin-top: 60px;
  background: #e5e5e5;
  padding: 10px;
  padding-bottom: 17px;
`;
const DisclaimerWrapper = styled.View`
  min-height: 20px;
  padding: 4px;
  background: #ffffff;
  border: 3px solid #c2c2c2;
`;
const DisclaimerText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
`;
const Paragraph = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;
  width: 95%;

`;

const Footer = () => {
  return (
    <Wrapper>
      <DisclaimerWrapper>
        <DisclaimerText>DISCLAIMER</DisclaimerText>
      </DisclaimerWrapper>
      <Paragraph>
        The interRAI Self-Reported Check-Up Assessment is a diagnostic tool
        intended to be interpreted by healthcare professionals only. If you have
        any concerns about this tool or the results generated, please follow up
        with your physician or healthcare provider.
      </Paragraph>
    </Wrapper>
  );
};

export default Footer;
