import { StyleSheet, TextInput, View } from "react-native";
import PropTypes from "prop-types";
import CustomButton from "../button/button";

const BuyAssetCard = () => {
  return (
    <View style={styles.buyAsset}>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderRadius: 5.63,
            height: 42,
            width: 179,
          }}
          placeholder="Number of Tokens"
        ></TextInput>
      </View>
      <CustomButton buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle}>
        Buy Now
      </CustomButton>
    </View>
  );
};

export default BuyAssetCard;

const styles = StyleSheet.create({
  buyAsset: {
    height: 91,
    width: "100%",
    flexDirection: "row",
    padding: 22,
    backgroundColor: "white",
    borderWidth: 0.2,
    justifyContent: "center",
  },
  buttonStyle: {
    width: 143,
    marginLeft: 22,
    height: 41,
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EC3335",
  },
  buttonTextStyle: {
    color: "white",
  },
});

BuyAssetCard.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

BuyAssetCard.defaultProps = {
  heading: "",
  subHeading: "",
};
