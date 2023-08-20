import { writeContract } from "./writeContract";

export const wrapInitWriteContract = async (
  init: Omit<writeTxProps, "funcName">,
  funcName: string,
  funcArg?: any[]
) => {
  const txProps = {
    ...init,
    funcName: funcName,
    funcArg: funcArg,
  };
  await writeContract(txProps);
};
