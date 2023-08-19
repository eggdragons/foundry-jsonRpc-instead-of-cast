import { writeContract } from "./lib/writeContract";
import deployJson from "./Counter.json";

let txProps: writeTxProps = {
  funcName: "",
  funcAbi: deployJson.abi,
  contractAddress: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  txArg: {},
};

const simpleWriteTx = async (funcName: string, funcArg?: any[]) => {
  txProps = {
    ...txProps,
    funcName: funcName,
    funcArg: funcArg,
  };
  await writeContract(txProps);
};

const multiFunc = async () => {
  await simpleWriteTx("setNumber", [2]);
  await simpleWriteTx("increment");
};
multiFunc();
