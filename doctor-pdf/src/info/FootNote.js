import React from "react";
import styled from "@react-pdf/styled-components";

const FootNoteText = styled.Text`
font-size: 11px;
margin-top: 25px;
font-family: Roboto;
font-weight: normal

`;

const FootNote = () => {
  return (
    <FootNoteText>
      Paquay, L., Lepeleire, J. D., Schoenmakers, B., Ylieff, M., Fontaine, O.,
      & Buntinx, F. (2007). Comparison of the diagnostic accuracy of the
      Cognitive Performance Scale (Minimum Data Set) and the Mini‐Mental State
      Exam for the detection of cognitive impairment in nursing home residents.
      International Journal of Geriatric Psychiatry: A journal of the psychiatry
      of late life and allied sciences, 22(4), 286-293.
    </FootNoteText>
  );
};

export default FootNote;
