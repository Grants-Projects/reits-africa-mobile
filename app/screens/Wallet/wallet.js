import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Deposit from "../../../assets/svg/deposit.svg";
import Withdrawal from "../../../assets/svg/withdrawal.svg";
import Exchange from "../../../assets/svg/exchange.svg";
import Send from "../../../assets/svg/send.svg";
import PropTypes from "prop-types";

import BasePageLayout from "../../ components/basePageLayout.js/basePageLayout";
import WalletCard from "../../ components/walletCard";

const Wallet = ({ navigation }) => {
  return (
    <BasePageLayout navigation={navigation} title="My Wallet">
      <View style={styles.walletWrapper}>
        <WalletCard />
        <Text style={styles.heading}>My Wallet</Text>
        <View style={styles.walletOptionsRow1}>
          <Pressable onPress={() => navigation.navigate("WalletDeposit")}>
            <View style={styles.optionContainer}>
              <View style={styles.iconWrapper}>
                <Deposit />
              </View>
              <Text>Deposit</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("WalletWithdrawal")}>
            <View style={styles.optionContainer}>
              <View style={styles.iconWrapper}>
                <Withdrawal />
              </View>
              <Text>Withdrawal</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.optionContainer}>
              <View style={styles.iconWrapper}>
                <Exchange />
              </View>
              <Text>Exchange</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("WalletSendAsset")}>
            <View style={styles.optionContainer}>
              <View style={styles.iconWrapper}>
                <Send />
              </View>
              <Text>Send</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.walletOptionsRow2}>
          <Pressable>
            <View style={styles.optionContainer}>
              <View style={styles.iconWrapper}>
                <Send />
              </View>
              <Text>Transactions</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </BasePageLayout>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  walletWrapper: {
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 40,
  },
  walletOptionsRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 44,
  },
  walletOptionsRow2: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  iconWrapper: {
    width: 61,
    height: 61,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30.5,
    backgroundColor: "#EEF7FE",
    marginBottom: 9.4,
  },
  optionContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});

Wallet.propTypes = {
  navigation: PropTypes.object,
};

Wallet.defaultProps = {
  navigation: {},
};
