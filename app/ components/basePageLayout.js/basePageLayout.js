import React from "react";
import { StyleSheet, View } from "react-native";
import NavBar from "components/navigation/navBar/navBar";
import PropTypes from "prop-types";
import BottomNavigation from "../bottomNavigation/bottomNavigation";

const BasePageLayout = ({ children, navigation, type, title }) => {
  return (
    <>
      <View style={styles.basePageLayoutWrapper}>
        <NavBar navigation={navigation} type={type} title={title} />
        <View>{children}</View>
        <View style={styles.bottomNavigationWrapper}>
          <BottomNavigation navigation={navigation} />
        </View>
      </View>
    </>
  );
};

export default BasePageLayout;

const styles = StyleSheet.create({
  basePageLayoutWrapper: {
    backgroundColor: "white",
    flex: 1,
  },
  bottomNavigationWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

BasePageLayout.propTypes = {
  children: PropTypes.node,
  navigation: PropTypes.object,
  type: PropTypes.string,
  title: PropTypes.string,
};

BasePageLayout.defaultProps = {
  children: "",
  navigation: {},
  type: "",
  title: "",
};
