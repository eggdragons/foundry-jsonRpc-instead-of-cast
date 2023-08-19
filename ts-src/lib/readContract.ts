import { ethers } from "ethers";
import { CONTRACT_ADDRESS, PROVIDER_URL } from "../global";

export const readContract = async ({
  funcName,
  funcAbi,
  funcArg,
}: ReadTxProps) => {
  const abi = funcAbi;
  const iface = new ethers.Interface(abi);
  const data = funcArg
    ? iface.encodeFunctionData(funcName, funcArg)
    : iface.encodeFunctionData(funcName);

  const transactionData = {
    to: CONTRACT_ADDRESS,
    data: data,
  };

  const result = await fetch(PROVIDER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_call",
      params: [transactionData],
      id: 1,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const json = res as { jsonrpc: string; id: number; result: string };
      return json.result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(result);
};
