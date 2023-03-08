import { Alchemy, Network, AlchemySubscription } from "alchemy-sdk";
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS as string;
const API_KEY = process.env.API_KEY as string;
const settings = {
    apiKey: API_KEY, // Replace with your Alchemy API Key
    network: Network.MATIC_MUMBAI, // Replace with your network
  };

  const alchemy = new Alchemy(settings);
  console.log("Connected to Websocket")
  // Subscription for Alchemy's pendingTransactions API
alchemy.ws.on(
    {
      method: AlchemySubscription.PENDING_TRANSACTIONS,
      toAddress: CONTRACT_ADDRESS,
    },
    (tx) => console.log(tx)
  );