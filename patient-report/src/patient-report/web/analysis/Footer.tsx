import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.footer`
  background: #e5e5e5;
  mix-blend-mode: normal;
  padding: 1.2rem;
  margin-bottom: 3.0625rem;
  margin-top: 3rem;
  .disclaimer {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 14px;
    background: #ffffff;
    mix-blend-mode: normal;
    border: 3px solid #c2c2c2;
    box-sizing: border-box;
    padding: 0.875rem;
    color: #000000;
    
    margin-bottom: 1rem;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.4rem;
    color: #000000;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <h3 className="disclaimer">DISCLAIMER</h3>
      <p>
        The interRAI Self-Reported Check-Up Assessment is a diagnostic tool
        intended to be interpreted by healthcare professionals only. If you have
        any concerns about this tool or the results generated, please follow up
        with your physician or healthcare provider.
      </p>
    </Wrapper>
  );
};

export default Footer;
