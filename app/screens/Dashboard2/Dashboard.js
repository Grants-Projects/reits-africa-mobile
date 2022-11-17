import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import BasePageLayout from "../../components/basePageLayout.js/basePageLayout";
import SearchBar from "../../components/searchBar/searchBar";
import CustomButton from "../../components/button/button";
import ProductCard from "../../components/productCard/productCard";
import PropTypes from "prop-types";

const active = 0;
const data = ["All", "For JV", "Sale", "Rent"];
const Dashboard2 = ({ navigation }) => {
  return (
    <BasePageLayout navigation={navigation}>
      <ScrollView>
        <View style={styles.dashboardWrapper}>
          <View style={styles.headerText}>
            <Text style={styles.headerText1}>Invest in tokenized real estate with</Text>
            <Text style={styles.headerText2}>REITS Africa </Text>
          </View>

          <SearchBar />
          <View>
            <Text style={styles.categoriesHeader}>Categories</Text>
          </View>
          <View style={styles.categoriesFilters}>
            {data.map((e, i) => (
              <CustomButton
                buttonStyle={i === active ? styles.buttonStyleActive : styles.buttonStyle}
                buttonTextStyle={
                  i === active ? styles.buttonTextStyleActive : styles.buttonTextStyle
                }
                key={e}
                onPress={() => console.log(e)}
              >
                {e}
              </CustomButton>
            ))}
          </View>
          <View>
            <Pressable onPress={() => navigation.navigate("ProductDetail")}>
              <ProductCard />
            </Pressable>
            <ProductCard />
            <ProductCard />
          </View>
        </View>
      </ScrollView>
    </BasePageLayout>
  );
};

export default Dashboard2;

const styles = StyleSheet.create({
  dashboardWrapper: {
    paddingHorizontal: 25,
    paddingBottom: 180,
  },
  headerText: {
    marginBottom: 24,
  },
  headerText1: {
    fontSize: 20,
    fontWeight: "400",
  },
  headerText2: {
    fontSize: 20,
    fontWeight: "600",
    color: "red",
  },
  buttonStyle: {
    borderRadius: 5.43,
    height: 46,
    alignItems: "center",
    borderWidth: 0.3,
    justifyContent: "center",
    width: 90,
  },
  buttonStyleActive: {
    borderRadius: 5.43,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EC3335",
    width: 90,
  },
  buttonTextStyle: {
    color: " #565656",
    fontSize: 20,
    fontWeight: "300",
    lineHeight: 20,
  },
  buttonTextStyleActive: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    lineHeight: 20,
  },
  categoriesHeader: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: "600",
  },
  categoriesFilters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 32,
  },
});
Dashboard2.propTypes = {
  navigation: PropTypes.object,
};

Dashboard2.defaultProps = {
  navigation: {},
};
