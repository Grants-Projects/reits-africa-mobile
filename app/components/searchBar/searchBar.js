import { StyleSheet, TextInput, View } from "react-native";
import SearchIcon from "../../../assets/svg/search.svg";
import SearchArrows from "../../../assets/svg/searchArrows.svg";

const SearchBar = () => {
  return (
    <View style={styles.searchBarWrapper}>
      <SearchIcon style={styles.searchIcon} />
      <SearchArrows style={styles.searchArrows} />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: 5.63,
          height: 45,
          paddingLeft: 47,
        }}
        placeholder="search properties"
      ></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarWrapper: {
    height: 45,
    width: "100%",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    top: 16,
    left: 19,
  },
  searchArrows: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});
