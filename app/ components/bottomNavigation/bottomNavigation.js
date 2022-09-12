import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DashboardIcon from "../../../assets/svg/dashboard.svg";
import DashboardActiveIcon from "../../../assets/svg/dashboardActive.svg";

import InvestIcon from "../../../assets/svg/invest.svg";
// import InvestIconActive from "../../../assets/svg/investActive.svg";

import PortfolioIcon from "../../../assets/svg/portfolio.svg";
import PortfolioActiveIcon from "../../../assets/svg/portfolioActive.svg";

import SettingsIcon from "../../../assets/svg/settings.svg";
// import SettingsIconActive from "../../../assets/svg/settingsActive.svg";

import WalletIcon from "../../../assets/svg/wallet.svg";
import WalletIconActive from "../../../assets/svg/walletActive.svg";
import PropTypes from "prop-types";

import { useRoute } from "@react-navigation/native";

const BottomNavigation = ({ navigation }) => {
  const route = useRoute();
  console.log(route);
  const isDashboard = route.name === "Dashboard";
  const isPortfolio = route.name === "Portfolio";
  const isWallet = route.name.includes("Wallet");
  const isInvest = route.name === "Invest";
  const isSettings = route.name === "Settings";
  console.log(isWallet, "isWallet");
  return (
    <View style={styles.bottomNavigationWrapper}>
      <View style={styles.bottomNavigation}>
        <Pressable onPress={() => navigation.navigate("Dashboard")}>
          <View style={styles.bottomNavigationItem}>
            {isDashboard ? <DashboardActiveIcon /> : <DashboardIcon />}
            <Text
              style={
                isDashboard ? styles.bottomNavigationLabelActive : styles.bottomNavigationLabel
              }
            >
              Dashboard
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Portfolio")}>
          <View style={styles.bottomNavigationItem}>
            {isPortfolio ? <PortfolioActiveIcon /> : <PortfolioIcon />}
            <Text
              style={
                isPortfolio ? styles.bottomNavigationLabelActive : styles.bottomNavigationLabel
              }
            >
              Portfolio
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Wallet")}>
          <View style={styles.bottomNavigationItem}>
            {isWallet ? <WalletIconActive /> : <WalletIcon />}
            <Text
              style={isWallet ? styles.bottomNavigationLabelActive : styles.bottomNavigationLabel}
            >
              Wallet
            </Text>
          </View>
        </Pressable>

        <View style={styles.bottomNavigationItem}>
          {/* {isInvest ? <InvestIconActive />: <InvestIcon />} */}
          <InvestIcon />
          <Text
            style={isInvest ? styles.bottomNavigationLabelActive : styles.bottomNavigationLabel}
          >
            Invest
          </Text>
        </View>
        <View style={styles.bottomNavigationItem}>
          {/* {isSettings ? <SettingsIconActive /> : <SettingsIcon /> } */}
          <SettingsIcon />
          <Text
            style={isSettings ? styles.bottomNavigationLabelActive : styles.bottomNavigationLabel}
          >
            Settings
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  bottomNavigationWrapper: {
    backgroundColor: "#F8F8F8",
    height: 89,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0,
  },
  bottomNavigation: {
    flexDirection: "row",
    paddingHorizontal: 29,
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  bottomNavigationItem: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 54,
  },
  bottomNavigationLabel: {
    fontSize: 8,
    fontWeight: "600",
    marginTop: 6,
    color: "#A7AEB1",
  },
  bottomNavigationLabelActive: {
    fontSize: 8,
    fontWeight: "600",
    marginTop: 6,
    color: "black",
  },
  svgActive: {
    stroke: "black",
  },
  // svg: {
  //   marginHorizontal: "auto",
  // },
});

BottomNavigation.propTypes = {
  navigation: PropTypes.object,
};

BottomNavigation.defaultProps = {
  navigation: {},
};
