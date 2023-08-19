import { readContract } from "./lib/readContract";
import deployJson from "./Counter.json";

const txProps: ReadTxProps = {
  funcName: "number",
  funcAbi: deployJson.abi,
};

readContract(txProps);
