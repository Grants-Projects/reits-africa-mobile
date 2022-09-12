import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateWallet from "../../screens/CreateWallet/createWallet";
import Dashboard from "../../screens/Dashboard/dashboard";
import GetStarted from "../../screens/GetStarted/getStarted";
import Login from "../../screens/Login/login";
import Portfolio from "../../screens/Portfolio/portfolio";
import SignUp from "../../screens/SignUp/signUp";
import Wallet from "../../screens/Wallet/wallet";
import { Deposit, P2P, Withdrawal, SendAsset } from "../../screens/Wallet/index";
import WalletWebView from "../../screens/WalletWebView/walletWebView";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateWallet" component={CreateWallet} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="WalletDeposit" component={Deposit} />
        <Stack.Screen name="WalletP2P" component={P2P} />
        <Stack.Screen name="WalletWithdrawal" component={Withdrawal} />
        <Stack.Screen name="WalletSendAsset" component={SendAsset} />
        <Stack.Screen name="WaletWebView" component={WalletWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
