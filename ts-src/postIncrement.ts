import { writeContract } from "./lib/writeContract";

const txProps: writeTxProps = {
  funcName: "increment",
  funcAbi: ["function increment() public"],
  txArg: {},
};

writeContract(txProps);
