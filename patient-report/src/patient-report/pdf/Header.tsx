import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

import * as stylesObject from "./Header.styles";

const styles = StyleSheet.create(stylesObject as any);

const Wrapping = styled.View``;

const Header = () => {
  console.log("The Styles ", Object.keys(Wrapping));

  return (
    <View
      fixed
      render={({ pageNumber }) => {
        return (
          <View
            style={
              pageNumber === 1
                ? styles.headerWrapper
                : styles.headerWrapperWithBorder
            }
          >
            <View>
              <Image style={styles.interRAIImage} src="/interrai-logo.png" />
            </View>

            <View>
              <View style={styles.boldTextWrapper}>
                <Text style={styles.headingBoldText}>
                  Self-Reported Check-Up Assessment:
                </Text>
              </View>
              <View style={styles.headingTextWrapper}>
                <Text style={styles.headingLightText}>
                  Results for Patients and Caregivers
                </Text>
              </View>
            </View>

            <View>
              <Image style={styles.logoImage} src="/yourcareplus-logo.png" />
            </View>
          </View>
        );
      }}
    ></View>
  );
};

export default Header;
