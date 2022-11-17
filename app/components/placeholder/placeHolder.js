import { View } from "react-native";
import PropTypes from "prop-types";

const PlaceHolder = ({ wrapperStyle }) => {
  return <View style={wrapperStyle}></View>;
};

export default PlaceHolder;
PlaceHolder.propTypes = {
  wrapperStyle: PropTypes.object,
};

PlaceHolder.defaultProps = {
  wrapperStyle: {},
};
