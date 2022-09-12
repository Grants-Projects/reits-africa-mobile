import * as NearAPI from "near-api-js";

export const Wallet = async () => {
  const { WalletConnection, keyStores, connect } = NearAPI;

  const keyStore = new keyStores.BrowserLocalStorageKeyStore();

  const connectionConfig = {
    networkId: "testnet",
    keyStore: keyStore,
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };
  const near = await connect(connectionConfig);

  const wallet = new WalletConnection(near);

  return wallet;
};
