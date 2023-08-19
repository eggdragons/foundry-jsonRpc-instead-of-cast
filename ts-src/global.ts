import dotenv from "dotenv";

// Get .env
dotenv.config();

export const PROVIDER_URL =
  process.env.PROVIDER_URL ??
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
export const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!!;
export const PRIVATE_KEY = process.env.ANVIL_PRIVATE_KEY!!;
export const GAS_LIMIT = process.env.GAS_LIMIT ?? "21000";
export const MAX_PRIORITY_FEE_PER_GAS =
  process.env.MAX_PRIORITY_FEE_PER_GAS ?? "5";
export const MAX_FEE_PER_GAS = process.env.MAX_FEE_PER_GAS ?? "20";
export const CHAIN_ID = process.env.CHAIN_ID ?? "31337";
