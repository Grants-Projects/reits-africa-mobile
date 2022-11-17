import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "../button/button";
import WalletCard from "../walletCard";

const SelectAsset = () => {
  return (
    <View style={styles.selectAssetWrapper}>
      <View style={styles.walletWrapper}>
        <WalletCard />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Select an Asset</Text>
        <View style={styles.textInput}>
          <Picker
            selectedValue={"jav"}
            onValueChange={(itemValue, itemIndex) => console.log(itemValue, itemIndex)}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="jsad" />
            <Picker.Item label="JavaScript" value="jadads" />
            <Picker.Item label="JavaScript" value="jaddads" />
            <Picker.Item label="JavaScript" value="jadads" />
            <Picker.Item label="JavaScript" value="jsadad" />
          </Picker>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <CustomButton buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle}>
          {" "}
          Next
        </CustomButton>
      </View>
    </View>
  );
};

export default SelectAsset;
const styles = StyleSheet.create({
  selectAssetWrapper: {
    paddingHorizontal: 30,
  },
  walletWrapper: {
    marginTop: 25,
  },
  label: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
    marginBottom: 23,
  },
  textContainer: {
    marginTop: 54,
  },
  textInput: {
    // marginTop: -80,
  },
  buttonWrapper: {
    marginTop: 44,
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
