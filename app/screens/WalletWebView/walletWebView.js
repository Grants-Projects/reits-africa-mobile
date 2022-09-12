import { WebView } from "react-native-webview";

const WalletWebView = () => {
  return (
    <WebView
      source={{
        uri: "https://transaction-signer-webview.vercel.app/signtransaction?transaction=enroll&args=%7B%22course_id%22%3A%223%22%7D",
      }}
    />
  );
};

export default WalletWebView;
