import { ImageBackground, StyleSheet, Text, View, Platform } from "react-native";
import CustomButton from "../../components/button/button";
import PropTypes from "prop-types";

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/background.png")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.getStartedWrapper}>
        <Text style={styles.getStartedHeader}>Reits Africa</Text>
        <View style={styles.getStartedBody}>
          <Text style={styles.getStartedBodyHeaderText}>
            Invest in tokenized real estate projects
          </Text>
          <Text style={styles.getStartedBodySubText}>
            Buy,rent,list or invest in tokenized real estate projects near you.
          </Text>
          <CustomButton
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            onPress={() => navigation.navigate("Login")}
          >
            Get Started
          </CustomButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  getStartedWrapper: {
    flex: 1,
    marginHorizontal: 26,
  },
  getStartedHeader: {
    marginTop: 73,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
  },
  getStartedBody: {
    marginTop: Platform.OS === "ios" ? 410 : 350,
  },
  getStartedBodyHeaderText: {
    fontSize: 35,
    fontWeight: "500",
    color: "white",
    marginBottom: 17,
  },
  getStartedBodySubText: {
    fontSize: 15,
    color: "white",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.65,
  },
  buttonStyle: {
    borderRadius: 4,
    height: 63,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EC3335",
    textAlign: "center",
    marginTop: 17,
  },
  buttonTextStyle: {
    color: "white",
  },
});

GetStarted.propTypes = {
  navigation: PropTypes.object,
};

GetStarted.defaultProps = {
  navigation: {},
};
