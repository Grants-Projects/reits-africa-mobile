import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import PropTypes from "prop-types";

function CustomCheckBox({
  checked,
  onChange,
  label,
  // buttonStyle = {},
  // activeButtonStyle = {},
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
}) {
  function onCheckmarkPress() {
    onChange(!checked);
  }

  const iconProps = checked ? activeIconProps : inactiveIconProps;
  return (
    <View style={styles.checkboxWrapper}>
      <Pressable
        //   style={[buttonStyle, checked ? activeButtonStyle : inactiveButtonStyle]}
        style={[styles.checkboxBase, checked ? styles.checkboxChecked : inactiveButtonStyle]}
        onPress={onCheckmarkPress}
      >
        {checked && <Ionicons name="checkmark" size={24} color="white" {...iconProps} />}
      </Pressable>
      <Text>{label} </Text>
    </View>
  );
}

export default CustomCheckBox;

const styles = StyleSheet.create({
  checkboxWrapper: {
    flexDirection: "row",
  },
  checkboxBase: {
    width: 15,
    height: 15,
    marginRight: 9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E2E8F0",
    backgroundColor: "transparent",
  },

  checkboxChecked: {
    backgroundColor: "coral",
  },
});

CustomCheckBox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  buttonStyle: PropTypes.object,
  activeButtonStyle: PropTypes.object,
  inactiveButtonStyle: PropTypes.object,
  activeIconProps: PropTypes.object,
  inactiveIconProps: PropTypes.object,
};

CustomCheckBox.defaultProps = {
  checked: false,
  onChange: () => {},
  label: "",
  buttonStyle: {},
  activeButtonStyle: {},
  inactiveButtonStyle: {},
  activeIconProps: {},
  inactiveIconProps: {},
};
