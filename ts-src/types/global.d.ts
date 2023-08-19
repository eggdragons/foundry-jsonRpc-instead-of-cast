declare global {
  type ReadTxProps = {
    funcName: string;
    funcAbi: any[];
    funcArg?: any[];
  };

  type writeTxProps = {
    txArg: {
      from?: string;
      to?: string;
      gasLimit?: number;
      maxPriorityFeePerGas?: number;
      maxFeePerGas?: number;
      value?: number;
      chainId?: number;
    };
  } & ReadTxProps;
}
export {};
