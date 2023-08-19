import { readContract } from "./lib/readContract";

const txProps: ReadTxProps = {
  funcName: "number",
  funcAbi: ["function number() public view returns (uint256)"],
};

readContract(txProps);
