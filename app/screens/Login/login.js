import React from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import CustomButton from "../../ components/button/button";
import CustomCheckBox from "../../ components/checkbox/checkbox";
import Header from "../../ components/header/header";
import PropTypes from "prop-types";

const Login = ({ navigation }) => {
  // connect to NEAR

  // create wallet connection
  return (
    <View style={styles.loginWrapper}>
      <Header
        heading="Login to your account"
        subHeading="Kindly fill in your information to login"
      />
      <View style={styles.loginEmail}>
        <Text>Email address/ Username</Text>
        <TextInput style={styles.loginInput} />
      </View>
      <View style={styles.loginPassword}>
        <Text>Password</Text>
        <TextInput style={styles.loginInput} />
      </View>
      <View style={styles.loginForgotPassword}>
        <CustomCheckBox label="I am not a robot" />
        <Text>Forgot Password ?</Text>
      </View>
      <CustomButton
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onPress={() => navigation.navigate("CreateWallet")}
      >
        Register
      </CustomButton>
      <View style={styles.loginSignUp}>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.loginSignUpText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    paddingTop: 79,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  loginEmail: {
    marginTop: 45,
  },
  loginPassword: {
    marginTop: 15,
  },
  loginInput: {
    width: "100%",
    height: 45,
    borderRadius: 5.63,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 7,
  },
  loginForgotPassword: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 19,
    marginBottom: 17,
  },
  loginSignUp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  loginSignUpText: {
    color: "#EC3335",
    marginLeft: 2,
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

Login.propTypes = {
  navigation: PropTypes.object,
};

Login.defaultProps = {
  navigation: {},
};
