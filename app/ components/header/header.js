import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const Header = ({ heading, subHeading }) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerText}>{heading}</Text>
      <Text style={styles.subHeaderText}>{subHeading}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerText: {
    color: "#1A202C",
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 10,
  },
  subHeaderText: {
    color: "#666666",
    fontSize: 14,
    fontWeight: "400",
  },
});

Header.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

Header.defaultProps = {
  heading: "",
  subHeading: "",
};
