import { View, Text, StyleSheet } from "react-native";

const WalletCard = () => {
  return (
    <View style={styles.walletCardWrapper}>
      <View>
        <Text style={styles.ballance}>Account Balance</Text>
        <Text style={styles.ballanceValue}>0.00 NGN</Text>
        <Text style={styles.ballanceTimer}>N0.00 (30d)</Text>
      </View>
      <View style={styles.percentageWrapper}>
        <Text style={styles.percentage}>0%</Text>
      </View>
    </View>
  );
};

export default WalletCard;

const styles = StyleSheet.create({
  walletCardWrapper: {
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "space-between",
    borderColor: "black",
    borderRadius: 7,
    width: "100%",
    paddingTop: 28,
    paddingRight: 31,
    paddingBottom: 25,
    paddingLeft: 30,
    marginTop: 55,
    marginBottom: 39,
  },
  ballance: {
    fontSize: 14,
    fontWeight: "500",
    color: "747475",
    marginBottom: 7,
  },
  ballanceValue: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 13,
  },
  ballanceTimer: {
    fontSize: 14,
    fontWeight: "700",
    color: "#49B464",
  },
  percentageWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: 55,
    height: 29.03,
    backgroundColor: "rgba(73, 180, 100, 0.1)",
    alignItems: "center",
  },
  percentage: {
    fontSize: 14,
    fontWeight: "700",
    color: "#49B464",
    textAlign: "center",
  },
});
