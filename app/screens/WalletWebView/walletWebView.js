import { useEffect, useRef, useState } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import PropTypes from "prop-types";

// import CustomButton from "../../components/button/button";

// import { useSelector, useDispatch } from "react-redux";
// import { setAccount, selectAccount } from "../../store/account/accountSlice";
import { WebView } from "react-native-webview";

const WalletWebView = ({ navigation }) => {
  const [account, setAccount] = useState();

  // const account = useSelector((state) => state.account.account);
  // const dispatch = useDispatch();

  console.log(account, "account information 1");
  // let jsCode = `
  // let account = window.localStorage.getItem("undefined_wallet_auth_key")
  // window.ReactNativeWebView.postMessage(account)
  // true;
  // `;
  let getAccountData = `
  window.ReactNativeWebView.postMessage(window.getItem("undefined_wallet_auth_key"));
  console.log("hello");
  true;`;

  let webref = useRef();
  // setTimeout(() => {
  // }, 3000);
  useEffect(() => {
    console.log(account, "account data");
    if (!account) {
      setTimeout(() => {
        webref.current.injectJavaScript(getAccountData);
      }, 3000);
    }
    if (account && Object.keys(account) !== 0 && account !== undefined) {
      console.log(account, "info after setting");
      // navigation.navigate("Dashboard");
    }
  }, [account]);
  useEffect(() => {
    webref.current.injectJavaScript(getAccountData);
  });
  // const isAccount = account && Object.keys(account) !== 0 && account !== undefined;
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "http://localhost:3000/wallet",
        }}
        ref={webref}
        onMessage={(event) => {
          // alert(event.nativeEvent.data);
          setAccount(event.nativeEvent.data);
          // dispatch(setAccount(event.nativeEvent.data));
        }}
      />
      <View style={styles.buttonStyle}>
        <Pressable
          onPress={() => navigation.navigate("Dashboard")}
          android_ripple={{ color: "#640233" }}
        >
          <Text style={styles.buttonTextStyle}>Navigate out of wallet</Text>
        </Pressable>
      </View>
    </View>
  );
};

// import React, { Component } from "react";
// import { View } from "react-native";
// import { WebView } from "react-native-webview";

// export default class WalletWebView extends Component {
//   render() {
//     const run = `
//       document.body.style.backgroundColor = 'red';
//       window.alert(window.localStorage.getItem("undefined_wallet_auth_key"));
//       true;
//     `;

//     setTimeout(() => {
//       this.webref.injectJavaScript(run);
//     }, 3000);

//     return (
//       <View style={{ flex: 1 }}>
//         <WebView
//           source={{
//             uri: "https://startling-macaron-9e863e.netlify.app/wallet",
//           }}
//           ref={(r) => (this.webref = r)}
//           onMessage={(event) => {
//             alert(event.nativeEvent.data);
//           }}
//         />
//       </View>
//     );
//   }
// }

export default WalletWebView;

const styles = StyleSheet.create({
  buttonStyle: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },

  buttonTextStyle: {
    color: "white",
  },
});

WalletWebView.propTypes = {
  navigation: PropTypes.object,
};

WalletWebView.defaultProps = {
  navigation: {},
};
