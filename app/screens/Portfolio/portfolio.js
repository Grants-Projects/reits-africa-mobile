import React from "react";
import { Text, View } from "react-native";
import BasePageLayout from "../../ components/basePageLayout.js/basePageLayout";
import PropTypes from "prop-types";
const Portfolio = ({ navigation }) => {
  return (
    <BasePageLayout navigation={navigation}>
      <View>
        <Text>Portfolio</Text>
      </View>
    </BasePageLayout>
  );
};

export default Portfolio;

Portfolio.propTypes = {
  navigation: PropTypes.object,
};

Portfolio.defaultProps = {
  navigation: {},
};
