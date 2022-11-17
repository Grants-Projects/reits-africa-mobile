import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import ImageIcon from "../../../assets/svg/imageIcon.svg";
import Love from "../../../assets/svg/love.svg";
import Share from "../../../assets/svg/share.svg";
import BasePageLayout from "../../components/basePageLayout.js/basePageLayout";
import CustomButton from "../../components/button/button";
import Checkmark from "../../../assets/svg/checkmark.svg";
import LocationMarker from "../../../assets/svg/locationmarker.svg";
import PropTypes from "prop-types";

const Label = ({ color, text }) => (
  <View
    style={{
      backgroundColor: color,
      borderRadius: 2,
      fontSize: 10,
      marginRight: 6,
      height: 25,
      width: 60,
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
Label.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

Label.defaultProps = {
  color: "",
  text: "",
};
export default function PropertyDetail({ navigation }) {
  return (
    <BasePageLayout
      navigation={navigation}
      title={"5000Near"}
      hideBottomNavigation={true}
      productDetail={true}
    >
      <ScrollView style={{ height: "80%" }}>
        <View style={styles.propertyDetail}>
          <View style={styles.propertyDetailimageWrapper}>
            <Image
              style={styles.propertyDetailimage}
              source={require("../../../assets/images/productDetail.png")}
            />
          </View>
          <View>
            <View style={styles.propertyDetailInfo}>
              <View style={styles.propertyDetailInfoActions}>
                <View style={styles.propertyDetailInfoActionItemA}>
                  <ImageIcon />
                </View>
                <View style={styles.propertyDetailInfoActionItemGroup}>
                  <View style={styles.propertyDetailInfoActionItemB}>
                    <Love />
                  </View>
                  <View style={styles.propertyDetailInfoActionItemB}>
                    <Share />
                  </View>
                </View>
              </View>
              <View style={styles.propertyDetailInfoLabels}>
                <Label color="#77C720" text="Featured"></Label>
                <Label color="#EC3335" text="For Sale"></Label>
                <Label color="rgba(0, 0, 0, 0.65)" text="For JV"></Label>
              </View>
              <View style={styles.propertyDetailLocationWrapper}>
                <LocationMarker />
                <Text style={styles.location}>admiralty way ,lekki lagos Nigeria</Text>
              </View>

              <Text style={styles.price}>$876,000</Text>
              <Text style={styles.tokenPrice}>50 NEAR/Token</Text>
            </View>
            <View style={styles.propertyDetailOverview}>
              <View style={styles.propertyDetailOverviewHeader}>
                <Text style={styles.overviewHeaderText}>Overview</Text>
                <View style={styles.overviewHeaderPropertyText}>
                  <Text style={styles.overviewHeaderPropertyTextHeader}>Property ID:</Text>
                  <Text style={styles.overviewHeaderPropertyTextSubText}>RAJV43</Text>
                </View>
              </View>
              <View style={styles.overViewItemsWrapper}>
                <View style={styles.overViewItem}>
                  <View style={styles.overViewItemContainer}>
                    <Text style={styles.overViewItemHeader}>Apartment</Text>
                    <Text style={styles.overViewItemSubText}>Property Type</Text>
                  </View>
                  <View style={styles.overViewItemContainer}>
                    <View>
                      <Text style={styles.overViewItemHeader}>3</Text>
                    </View>
                    <Text style={styles.overViewItemSubText}>Bedrooms</Text>
                  </View>
                </View>
                <View style={styles.overViewItem}>
                  <View style={styles.overViewItemContainer}>
                    <Text style={styles.overViewItemHeader}>2</Text>
                    <Text style={styles.overViewItemSubText}>Bathrooms</Text>
                  </View>
                  <View style={styles.overViewItemContainer}>
                    <View>
                      <Text style={styles.overViewItemHeader}>1</Text>
                    </View>
                    <Text style={styles.overViewItemSubText}>Garage</Text>
                  </View>
                </View>
                <View style={styles.overViewItem}>
                  <View style={styles.overViewItemContainer}>
                    <Text style={styles.overViewItemHeader}>250</Text>
                    <Text style={styles.overViewItemSubText}>Sq Ft</Text>
                  </View>
                  <View style={styles.overViewItemContainer}>
                    <View>
                      <Text style={styles.overViewItemHeader}>2016</Text>
                    </View>
                    <Text style={styles.overViewItemSubText}>Year Built</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.propertyDetailDescription}>
              <Text style={styles.propertyDetailDescriptionHeader}>Description</Text>
              <Text style={styles.propertyDetailDescriptionSubText}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </Text>
            </View>
            <View style={styles.propertyDetailAddress}>
              <View style={styles.propertyDetailAddressHeader}>
                <Text style={styles.propertyDetailAddressHeaderHeading}>Address</Text>
                <CustomButton>Open on Google Maps</CustomButton>
              </View>
              <View style={styles.propertyDetailAddressItems}>
                <View style={styles.propertyDetailAddressItem}>
                  <Text style={styles.propertyDetailAddressItemHeader}>Address</Text>
                  <Text style={styles.propertyDetailAddressItemSubText}>Admiralty way</Text>
                </View>
                <View style={styles.propertyDetailAddressItem}>
                  <Text style={styles.propertyDetailAddressItemHeader}>City</Text>
                  <Text style={styles.propertyDetailAddressItemSubText}>Lekki</Text>
                </View>
                <View style={styles.propertyDetailAddressItem}>
                  <Text style={styles.propertyDetailAddressItemHeader}>State/county</Text>
                  <Text style={styles.propertyDetailAddressItemSubText}>Lagos</Text>
                </View>
                <View style={styles.propertyDetailAddressItem}>
                  <Text style={styles.propertyDetailAddressItemHeader}>Zip/Postal Code</Text>
                  <Text style={styles.propertyDetailAddressItemSubText}>10013</Text>
                </View>
                <View style={styles.propertyDetailAddressItem}>
                  <Text style={styles.propertyDetailAddressItemHeader}>Area</Text>
                  <Text style={styles.propertyDetailAddressItemSubText}>Island</Text>
                </View>
                <View style={styles.propertyDetailAddressItem}>
                  <Text style={styles.propertyDetailAddressItemHeader}>Country</Text>
                  <Text style={styles.propertyDetailAddressItemSubText}>Nigeria</Text>
                </View>
              </View>
            </View>
            <View style={styles.propertyDetailDetails}>
              <Text style={styles.propertyDetailDetailsHeader}>Details</Text>
              <Text style={styles.propertyDetailDetailsSubHeader}>
                Updated on March 3, 2016 at 9:28 pm
              </Text>
              <View style={styles.propertyDetailDetailsInfo}>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Property ID:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>HZHZ43</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Price:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>$876,000</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>
                    Value after completion
                  </Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>$100,000,000</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Coordinates</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>
                    24’15’’N, 30’45’’E
                  </Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Price per token:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>2</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Available Tokens:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>1</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>
                    Profit Distribution:
                  </Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>One Time</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Completion Time:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>2016</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Property Type:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>Apartment</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Property Status:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>For Joint Venture</Text>
                </View>
              </View>
              <View>
                <Text style={styles.propertyDetailDetailsInfo2Header}>Additional details</Text>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Deposit:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>20%</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Pool Size:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>300 Sqft</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Last remodel year:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>1987</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Amenities:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>Clubhouse</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Additional Rooms::</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>Guest Bath</Text>
                </View>
                <View style={styles.propertyDetailDetailsInfoItem}>
                  <Text style={styles.propertyDetailDetailsInfoItemHeader}>Equipment:</Text>
                  <Text style={styles.propertyDetailDetailsInfoItemSubText}>Grill - Gas</Text>
                </View>
              </View>
              <View style={styles.propertyDetailFeatures}>
                <Text style={styles.propertyDetailFeaturesHeader}>Air Conditioning</Text>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Barbeque</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Dryer</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Gym</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Laundry</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Lawn</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Microwave</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Outdoor Shower</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Refrigerator</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Sauna</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Swimming Pool</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>TV Cable</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>Washer</Text>
                </View>
                <View style={styles.propertyDetailFeaturesItem}>
                  <Checkmark />
                  <Text style={styles.propertyDetailFeaturesItemSubText}>WiFi</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </BasePageLayout>
  );
}

const styles = StyleSheet.create({
  propertyDetail: {
    paddingBottom: 189,
  },
  propertyDetailimageWrapper: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  propertyDetailimage: {
    width: "100%",
  },
  propertyDetailInfo: {
    paddingHorizontal: 25,
    marginTop: 35,
  },
  propertyDetailInfoActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  propertyDetailInfoActionItemA: {
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: "#FFA72A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  propertyDetailInfoActionItemGroup: {
    flexDirection: "row",
  },
  propertyDetailInfoActionItemB: {
    width: 50,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#5C6872",
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  propertyDetailInfoLabels: {
    flexDirection: "row",
    marginTop: 19,
  },
  propertyDetailLocationWrapper: {
    flexDirection: "row",
    marginTop: 14,
  },
  location: {
    fontSize: 13,
    color: "#636363",
    marginLeft: 7,
  },
  price: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "700",
    color: "#565656",
  },
  tokenPrice: {
    fontSize: 12,
    fontWeight: "400",
    color: "#636363",
    marginTop: 8,
  },
  propertyDetailOverview: {
    paddingHorizontal: 25,
    paddingVertical: 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 25,
    borderColor: "grey",
  },
  propertyDetailOverviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 44,
  },
  overviewHeaderText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#565656",
  },
  overviewHeaderPropertyText: {
    flexDirection: "row",
    alignItems: "center",
  },
  overviewHeaderPropertyTextHeader: {
    fontSize: 15,
    fontWeight: "700",
    color: "#565656",
  },
  overviewHeaderPropertyTextSubText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#565656",
  },
  overViewItemsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  overViewItem: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  overViewItemContainer: {
    width: "50%",
  },
  overViewItemHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: "#565656",
  },
  overViewItemSubText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#5C6872",
  },
  propertyDetailDescription: {
    paddingHorizontal: 25,
  },
  propertyDetailDescriptionHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#565656",
    marginBottom: 28,
  },
  propertyDetailDescriptionSubText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#565656",
    lineHeight: 25,
  },
  propertyDetailAddress: {
    marginTop: 73,
    paddingHorizontal: 25,
  },
  propertyDetailAddressHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  propertyDetailAddressHeaderHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#565656",
  },
  propertyDetailAddressItems: {
    marginTop: 37,
  },
  propertyDetailAddressItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 0.2,
    borderColor: "grey",
  },
  propertyDetailAddressItemHeader: {
    fontSize: 15,
    fontWeight: "600",
    color: "#565656",
    lineHeight: 36,
  },
  propertyDetailAddressItemSubText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#565656",
    lineHeight: 36,
  },
  propertyDetailDetails: {
    marginTop: 58,
    paddingHorizontal: 25,
  },
  propertyDetailDetailsHeader: {
    fontSize: 18,
    fontweight: "700",
    lineHeight: 22,
  },
  propertyDetailDetailsSubHeader: {
    fontSize: 12,
    fontweight: "400",
    lineHeight: 25,
    color: "#636363",
    marginLeft: 21,
    marginTop: 12,
    marginBottom: 25,
  },
  propertyDetailDetailsInfo: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FFA72A",
    backgroundColor: "rgba(255, 167, 42, 0.1)",
    paddingTop: 41,
    paddingBottom: 31,
    paddingHorizontal: 31,
  },
  propertyDetailDetailsInfoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
    borderColor: "grey",
    paddingVertical: 8,
  },
  propertyDetailDetailsInfoItemHeader: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 36,
    color: "#565656",
  },
  propertyDetailDetailsInfoItemSubText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 36,
    color: "#565656",
  },
  propertyDetailDetailsInfo2Header: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 36,
    color: "#565656",
    marginVertical: 37,
  },
  propertyDetailFeatures: {
    marginTop: 29,
  },
  propertyDetailFeaturesHeader: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21,
    color: "#565656",
    paddingBottom: 37,
  },
  propertyDetailFeaturesItem: {
    flexDirection: "row",
    paddingBottom: 20,
  },
  propertyDetailFeaturesItemSubText: {
    fontSize: 15,
    color: "#FFA72A",
    marginLeft: 12,
    fontWeight: "400",
  },
});

PropertyDetail.propTypes = {
  navigation: PropTypes.object,
};

PropertyDetail.defaultProps = {
  navigation: {},
};
