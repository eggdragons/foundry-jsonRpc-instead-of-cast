import { ethers } from "ethers";
import { getNonce } from "./getNonce";
import {
  CHAIN_ID,
  CONTRACT_ADDRESS,
  GAS_LIMIT,
  MAX_FEE_PER_GAS,
  MAX_PRIORITY_FEE_PER_GAS,
  PRIVATE_KEY,
  PROVIDER_URL,
} from "../global";

export const writeContract = async ({
  funcName,
  funcAbi,
  funcArg,
  contractAddress,
  txArg,
}: writeTxProps) => {
  const provider = new ethers.JsonRpcProvider(PROVIDER_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const walletAddress = wallet.address;
  // const nonce = await getNonce(env.RPC_URL, walletAddress);

  const abi = funcAbi;
  const iface = new ethers.Interface(abi);

  const data = funcArg
    ? iface.encodeFunctionData(funcName, funcArg)
    : iface.encodeFunctionData(funcName);

  const nonce = await getNonce(walletAddress);

  const transactionData = {
    type: 2,
    from: txArg.from ?? walletAddress,
    to: contractAddress ?? CONTRACT_ADDRESS,
    gasLimit: txArg.gasLimit ?? GAS_LIMIT,
    maxPriorityFeePerGas: ethers.parseUnits(
      String(txArg.maxPriorityFeePerGas ?? MAX_PRIORITY_FEE_PER_GAS),
      "gwei"
    ),
    maxFeePerGas: ethers.parseUnits(
      String(txArg.maxFeePerGas ?? MAX_FEE_PER_GAS),
      "gwei"
    ),
    value: ethers.parseEther(String(txArg.value ?? 0)),
    data: data,
    nonce: nonce,
    chainId: String(txArg.chainId ?? CHAIN_ID),
  };

  const signature = await wallet.signTransaction(transactionData);

  const result = await fetch(PROVIDER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_sendRawTransaction",
      params: [signature],
      id: 1,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const json = res as { jsonrpc: string; id: number; result: string };
      console.log(json);
      return json.result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log(result);
};
