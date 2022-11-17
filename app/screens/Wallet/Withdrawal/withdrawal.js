import { View } from "react-native";
import BasePageLayout from "../../../components/basePageLayout.js/basePageLayout";
import SelectAsset from "../../../components/selectAsset/selectAsset";
import PropTypes from "prop-types";

const Withdrawal = ({ navigation }) => {
  return (
    <BasePageLayout navigation={navigation} title="Withdrawal">
      <View>
        <SelectAsset />
      </View>
    </BasePageLayout>
  );
};

export default Withdrawal;

Withdrawal.propTypes = {
  navigation: PropTypes.object,
};

Withdrawal.defaultProps = {
  navigation: {},
};
