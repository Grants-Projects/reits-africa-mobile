import React from "react";
import { StyleSheet, View } from "react-native";
import NavBar from "components/navigation/navBar/navBar";
import PropTypes from "prop-types";
import BottomNavigation from "../bottomNavigation/bottomNavigation";
import BuyAssetCard from "../buyAssetCard/buyAssetCard";

const BasePageLayout = ({
  children,
  navigation,
  type,
  title,
  hideBottomNavigation,
  productDetail,
}) => {
  return (
    <>
      <View style={styles.basePageLayoutWrapper}>
        <NavBar navigation={navigation} type={type} title={title} />
        <View>{children}</View>
        {productDetail && <BuyAssetCard />}
        <View style={styles.bottomNavigationWrapper}>
          {!hideBottomNavigation && <BottomNavigation navigation={navigation} />}
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
  hideBottomNavigation: PropTypes.bool,
  productDetail: PropTypes.bool,
};

BasePageLayout.defaultProps = {
  children: "",
  navigation: {},
  type: "",
  title: "",
  hideBottomNavigation: false,
  productDetail: false,
};
