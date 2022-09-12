import { StyleSheet, View, Text, ScrollView } from "react-native";
import AssetCard from "../../ components/assetCard/assetCard";
import BasePageLayout from "../../ components/basePageLayout.js/basePageLayout";
import CustomButton from "../../ components/button/button";
import PlaceHolder from "../../ components/placeholder/placeHolder";
import PropTypes from "prop-types";

const PropertyPlaceHolder = () => {
  return (
    <View style={styles.propertyPlaceHolder}>
      <PlaceHolder wrapperStyle={styles.placeHolderStyle} />
      <View style={styles.propertyPlaceHolderText}>
        <Text style={styles.propertyPlaceHolderTextItem}>3 BEDROOM ....</Text>
        <Text style={styles.propertyPlaceHolderTextItem}>ID: RFCE345</Text>
      </View>
    </View>
  );
};
const arr = [1, 2, 3, 4, 5];

const Dashboard = ({ navigation }) => {
  return (
    <BasePageLayout navigation={navigation} type="dashboard">
      <ScrollView style={styles.dashboard}>
        <View style={styles.dashboardAssetCardWrapper}>
          <AssetCard title="Total Asset" price="0.00" />
        </View>
        <View style={styles.dashboardTransactionsWrapper}>
          <View>
            <Text style={styles.dashboardTransactionsHeading}>Transactions</Text>
          </View>
          <View style={styles.dashboardTransactionTableHeader}>
            <Text style={styles.dashboardTransactionTableHeaderItem1}>Property</Text>
            <Text style={styles.dashboardTransactionTableHeaderItem}>Price</Text>
            <Text style={styles.dashboardTransactionTableHeaderItem}>Price Per Token</Text>
            <Text style={styles.dashboardTransactionTableHeaderItem}>Available Tokens</Text>
          </View>
          <ScrollView>
            {arr.map((e) => {
              return (
                <View key={e} style={styles.dashboardTransactionTableRow}>
                  <View style={styles.dashboardTransactionTableRowItem1}>
                    <PropertyPlaceHolder />
                  </View>
                  <Text style={styles.dashboardTransactionTableRowItem}>$400,000</Text>
                  <Text style={styles.dashboardTransactionTableRowItem}>2.344323323</Text>
                  <Text style={styles.dashboardTransactionTableRowItem}>200,000</Text>
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.buttonWrapper}>
            <CustomButton buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle}>
              Load More
            </CustomButton>
          </View>
        </View>
      </ScrollView>
    </BasePageLayout>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardAssetCardWrapper: {
    paddingHorizontal: 30,
    marginTop: 40,
  },
  dashboard: {
    backgroundColor: "white",
  },
  dashboardTransactionsWrapper: {
    marginTop: 41,
    paddingHorizontal: 14,
  },
  dashboardTransactionsHeading: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 15,
    marginBottom: 19,
  },
  dashboardTransactionTableHeader: {
    backgroundColor: "#F7F9FA",
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  dashboardTransactionTableHeaderItem: {
    flex: 1,
    fontSize: 10,
    color: "#A6A9AA",
  },
  dashboardTransactionTableHeaderItem1: {
    flex: 1.5,
    fontSize: 10,
    color: "#A6A9AA",
  },
  propertyPlaceHolder: {
    flexDirection: "row",
    alignItems: "center",
  },
  propertyPlaceHolderTextItem: {
    fontSize: 10,
  },
  placeHolderStyle: {
    width: 25,
    height: 25,
    backgroundColor: "black",
    borderRadius: 5,
    marginRight: 6,
  },
  dashboardTransactionTableRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 33,
    marginBottom: 15,
  },
  dashboardTransactionTableRowItem: {
    flex: 1,
    fontSize: 10,
  },
  dashboardTransactionTableRowItem1: {
    flex: 1.5,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    borderWidth: 1,
    width: 112,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
    borderColor: "rgba(0, 0, 0, 0.16)",
  },
  buttonTextStyle: {
    color: "black",
  },
});

Dashboard.propTypes = {
  navigation: PropTypes.object,
};

Dashboard.defaultProps = {
  navigation: {},
};
