import { PROVIDER_URL } from "../global";

export const getNonce = async (walletAddress: string) => {
  const nonce = await fetch(PROVIDER_URL, {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getTransactionCount",
      params: [walletAddress, "latest"],
      id: 1,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      const result = json as { jsonrpc: string; id: number; result: number };
      return result.result;
    });
  return nonce;
};
