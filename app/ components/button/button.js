import React from "react";
import { Pressable, View, Text } from "react-native";
import PropTypes from "prop-types";

const CustomButton = ({ children, onPress, buttonStyle, buttonTextStyle }) => {
  return (
    <View style={buttonStyle}>
      <Pressable onPress={() => onPress()} android_ripple={{ color: "#640233" }}>
        <Text style={buttonTextStyle}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  navigation: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonTextStyle: PropTypes.object,
};

CustomButton.defaultProps = {
  navigation: {},
  type: "",
  title: "",
};
