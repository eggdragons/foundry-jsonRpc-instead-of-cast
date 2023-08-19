import { writeContract } from "./lib/writeContract";

const txProps: writeTxProps = {
  funcName: "setNumber",
  funcAbi: ["function setNumber(uint256 newNumber) public"],
  funcArg: [3],
  txArg: {},
};

writeContract(txProps);
