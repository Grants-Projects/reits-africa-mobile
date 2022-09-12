import { View, StyleSheet } from "react-native";
import CustomButton from "../../ components/button/button";
// import CustomButton from "../../ components/button/button";
import PropTypes from "prop-types";
import Header from "../../ components/header/header";

const CreateWallet = ({ navigation }) => {
  return (
    <View style={styles.createWalletWrapper}>
      <Header heading="Connect Wallet" subHeading="Kindly connect your crypoto wallet" />

      <CustomButton
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onPress={() => navigation.navigate("Dashboard")}
      >
        Register
      </CustomButton>
    </View>
  );
};

export default CreateWallet;

const styles = StyleSheet.create({
  createWalletWrapper: {
    flex: 1,
    paddingTop: 79,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  buttonStyle: {
    borderRadius: 5.43,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#031F28",
    textAlign: "center",
  },
  buttonTextStyle: {
    color: "white",
  },
});

CreateWallet.propTypes = {
  navigation: PropTypes.object,
};

CreateWallet.defaultProps = {
  navigation: {},
};
