import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../button/button";

const AssetCard = ({ price, title }) => {
  return (
    <View style={styles.assetCard}>
      <View style={styles.assetCardHeader}>
        <Text style={styles.assetCardTitle}>{title}</Text>
        <View style={styles.assetCardPercentage}>
          <Text style={styles.percentageValue}>0%</Text>
        </View>
      </View>
      <Text style={styles.assetCardPrice}>{price} NGN</Text>
      <Text style={styles.assetCardAccuredInterest}>N0.00 (30d)</Text>
      <View style={styles.assetCardButtons}>
        <CustomButton buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle}>
          Buy
        </CustomButton>
        <CustomButton buttonStyle={styles.buttonStyle2} buttonTextStyle={styles.buttonTextStyle}>
          Trade
        </CustomButton>
      </View>
    </View>
  );
};

export default AssetCard;

const styles = StyleSheet.create({
  assetCard: {
    width: "100%",
    height: 176,
    borderWidth: 1,
    borderColor: "#F7F9FA",
    borderRadius: 7,
    paddingHorizontal: 28,
    paddingTop: 14,
  },
  assetCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  assetCardPercentage: {
    width: 55,
    height: 38,
    borderRadius: 5,
    backgroundColor: "rgba(73, 180, 100, 0.1)",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  percentageValue: {
    color: "#49B464",
    fontWeight: "700",
  },
  assetCardTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#747475",
  },
  assetCardPrice: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 12,
  },
  assetCardAccuredInterest: {
    fontSize: 14,
    fontWeight: "700",
    color: "#49B464",
    marginTop: 17,
  },
  assetCardButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonStyle: {
    width: 84,
    height: 34,
    borderRadius: 5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 11,
  },
  buttonStyle2: {
    width: 84,
    height: 34,
    borderRadius: 5,
    backgroundColor: "#A7AEB1",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    color: "white",
  },
});

AssetCard.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
};

AssetCard.defaultProps = {
  price: 0,
  title: "",
};
