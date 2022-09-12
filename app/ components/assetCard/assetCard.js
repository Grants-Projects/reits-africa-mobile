import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, Text, TextInput, View } from "react-native";

const AssetCard = ({ price, title }) => {
  return (
    <View style={styles.assetCard}>
      <Text style={styles.assetCardTitle}>{title}</Text>
      <Text style={styles.assetCardPrice}>{price} NGN</Text>
      <View>
        <TextInput />
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
});

AssetCard.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
};

AssetCard.defaultProps = {
  price: 0,
  title: "",
};
