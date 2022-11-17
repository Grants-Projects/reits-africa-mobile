import { View } from "react-native";
import BasePageLayout from "../../../components/basePageLayout.js/basePageLayout";
import SelectAsset from "../../../components/selectAsset/selectAsset";
import PropTypes from "prop-types";

const SendAsset = ({ navigation }) => {
  return (
    <BasePageLayout navigation={navigation} title="Send">
      <View>
        <SelectAsset />
      </View>
    </BasePageLayout>
  );
};

export default SendAsset;

SendAsset.propTypes = {
  navigation: PropTypes.object,
};

SendAsset.defaultProps = {
  navigation: {},
};
