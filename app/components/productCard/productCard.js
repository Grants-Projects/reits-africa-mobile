import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Bath from "../../../assets/svg/bath.svg";
import Shower from "../../../assets/svg/shower.svg";
import Car from "../../../assets/svg/car.svg";
import NearToken from "../../../assets/svg/neartoken.svg";
import Image from "../../../assets/images/productCard.png";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";

const Label = ({ color, text }) => (
  <View
    style={{
      backgroundColor: color,
      borderRadius: 5,
      height: 17,
      paddingHorizontal: 4,
      width: 59,
      marginRight: 11,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ textTransform: "uppercase", color: "white", fontSize: 10, fontWeight: "600" }}>
      {text}
    </Text>
  </View>
);
const ProductCard = () => {
  return (
    <View style={styles.productCard}>
      <LinearGradient colors={["white", "black"]} style={styles.linearGradient}>
        <ImageBackground source={Image} resizeMode="cover" style={{ flex: 1 }}>
          <View style={styles.topLabel}>
            <Label color="#77C720" text="Featured" />
          </View>
          <View>
            <View style={styles.midLabels}>
              <Label color={"#EC3335"} text="For Sale" />
              <Label color={"rgba(0, 0, 0, 0.65)"} text="For JV" />
            </View>
            <View style={styles.productCardBottomInfo}>
              <View>
                <Text style={styles.price}>$876,000</Text>
              </View>
              <View style={styles.productCardBottom}>
                <View style={styles.productCardBottomItem}>
                  <Bath />
                  <Text style={styles.productCardBottomItemText}>3</Text>
                </View>
                <View style={styles.productCardBottomItem}>
                  <Shower />
                  <Text style={styles.productCardBottomItemText}>2</Text>
                </View>
                <View style={styles.productCardBottomItem}>
                  <Car />
                  <Text style={styles.productCardBottomItemText}>1</Text>
                </View>
                <View style={styles.productCardBottomItem}>
                  <NearToken />
                  <Text style={styles.productCardBottomItemText}>25NEAR Per token</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    position: "relative",
    height: 238,
    width: "100%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    overflow: "hidden",
    marginBottom: 22,
  },
  linearGradient: {
    top: 0,
    left: 0,
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  topLabel: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  midLabels: {
    position: "absolute",
    flexDirection: "row",
    top: 140,
    left: 20,
  },
  productCardBottomInfo: {
    position: "absolute",
    top: 167,
    left: 20,
  },
  price: {
    fontSize: 18,
    color: "white",
    fontWeight: "700",
  },
  productCardBottom: {
    flexDirection: "row",
  },
  productCardBottomItem: {
    flexDirection: "row",
    height: 40,
    marginTop: 10,
  },
  productCardBottomItemText: {
    color: "white",
    marginRight: 12,
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "600",
  },
});
Label.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

Label.defaultProps = {
  color: "",
  text: "",
};
