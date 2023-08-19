declare global {
  type ReadTxProps = {
    funcName: string;
    funcAbi: any[];
    funcArg?: any[];
    contractAddress?: string;
  };

  type writeTxProps = {
    txArg: {
      from?: string;
      gasLimit?: number;
      maxPriorityFeePerGas?: number;
      maxFeePerGas?: number;
      value?: number;
      chainId?: number;
    };
  } & ReadTxProps;
}
export {};
