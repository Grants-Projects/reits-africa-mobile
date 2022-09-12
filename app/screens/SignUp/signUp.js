import React from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import CustomButton from "../../ components/button/button";
import CustomCheckBox from "../../ components/checkbox/checkbox";
import Header from "../../ components/header/header";
import PropTypes from "prop-types";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.signUpWrapper}>
      <Header
        heading="Signup to Reits Africa"
        subHeading="Kindly fill in your information to signup"
      />
      <View style={styles.signUpNames}>
        <View style={styles.signUpNameWrapper}>
          <Text>First name</Text>
          <TextInput style={styles.signUpInput} />
        </View>
        <View style={styles.signUpNameWrapper}>
          <Text>Last name</Text>
          <TextInput style={styles.signUpInput} />
        </View>
      </View>
      <View style={styles.signUpInputWrapper}>
        <Text>New Username</Text>
        <TextInput style={styles.signUpInput} />
      </View>
      <View style={styles.signUpInputWrapper}>
        <Text>Email address</Text>
        <TextInput style={styles.signUpInput} />
      </View>
      <View style={styles.signUpInputWrapper}>
        <Text>KYC Document</Text>
        <TextInput style={styles.signUpInput} />
      </View>
      <View style={styles.signUpInputWrapper}>
        <Text>Upload Verification Document</Text>
        <TextInput style={styles.signUpInput} />
      </View>
      <View style={styles.signUpInputWrapper}>
        <Text>Password</Text>
        <TextInput style={styles.signUpInput} />
      </View>
      <View style={styles.signUpInputWrapper && styles.signUpCheckBox}>
        <CustomCheckBox label="I agree to REITS Africa terms and conditions" />
      </View>
      <View>
        <CustomButton buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle}>
          Register
        </CustomButton>
      </View>
      <View style={styles.signUpLogin}>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signUpLoginText}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  signUpWrapper: {
    flex: 1,
    paddingTop: 51,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  signUpNames: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },
  signUpNameWrapper: {
    width: "48%",
  },
  signUpInputWrapper: {
    marginTop: 15,
  },
  signUpCheckBox: {
    marginVertical: 16,
  },
  signUpInput: {
    width: "100%",
    height: 45,
    borderRadius: 5.63,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    marginTop: 7,
  },
  signUpLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  signUpLoginText: {
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

SignUp.propTypes = {
  navigation: PropTypes.object,
};

SignUp.defaultProps = {
  navigation: {},
};
