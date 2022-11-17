import { View, Text, StyleSheet } from "react-native";
import PlaceHolder from "../../placeholder/placeHolder";
import BackButton from "../../backButton/backButton";
import MoreIcon from "../../../../assets/svg/more.svg";

import PropTypes from "prop-types";
const NavBar = ({ type, title, navigation }) => {
  return (
    <View style={styles.navBarWrapper}>
      {type === "dashboard" ? (
        <>
          <Text style={styles.logoName}>Reits Africa</Text>
          <PlaceHolder wrapperStyle={styles.logoStyle} />
        </>
      ) : (
        <>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>{title}</Text>
          <MoreIcon />
        </>
      )}
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBarWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 30,
  },
  logoName: {
    fontSize: 24,
    fontWeight: "600",
  },
  logoStyle: {
    width: 35,
    height: 35,
    backgroundColor: "black",
  },
  navBarWrapperRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  companyName: {
    fontSize: 24,
    marginLeft: 9,
  },
});

NavBar.propTypes = {
  navigation: PropTypes.object,
  type: PropTypes.string,
  title: PropTypes.string,
};

NavBar.defaultProps = {
  navigation: {},
  type: "",
  title: "",
};
