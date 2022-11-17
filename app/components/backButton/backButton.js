import { View, Pressable } from "react-native";
import BackSvg from "../../../assets/svg/back.svg";
import PropTypes from "prop-types";

const BackButton = ({ navigation }) => {
  return (
    <View>
      <View>
        <Pressable
          onPress={() => {
            navigation.goBack();
            console.log("go back");
          }}
        >
          <BackSvg />
        </Pressable>
      </View>
    </View>
  );
};

export default BackButton;

BackButton.propTypes = {
  navigation: PropTypes.object,
};

BackButton.defaultProps = {
  navigation: {},
};
