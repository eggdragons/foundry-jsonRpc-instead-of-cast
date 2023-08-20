import deployJson from "./Counter.json";
import { wrapInitWriteContract } from "./lib/wrapInitWriteContract";

// set config
const init: Omit<writeTxProps, "funcName"> = {
  funcAbi: deployJson.abi,
  contractAddress: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  txArg: {},
};

// main function
const multiFunc = async () => {
  await wrapInitWriteContract(init, "setNumber", [2]);
  await wrapInitWriteContract(init, "increment");
};
multiFunc();
