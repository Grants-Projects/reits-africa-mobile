import { View } from "react-native";
import BasePageLayout from "../../../ components/basePageLayout.js/basePageLayout";
import SelectAsset from "../../../ components/selectAsset/selectAsset";
import PropTypes from "prop-types";

const Deposit = ({ navigation }) => {
  return (
    <BasePageLayout navigation={navigation} title="Deposit">
      <View>
        <SelectAsset />
      </View>
    </BasePageLayout>
  );
};

export default Deposit;

Deposit.propTypes = {
  navigation: PropTypes.object,
};

Deposit.defaultProps = {
  navigation: {},
};
