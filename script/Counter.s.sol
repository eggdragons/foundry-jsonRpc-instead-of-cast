// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/Counter.sol";

contract CounterScript is Script {
    Counter public counter;

    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("ANVIL_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        counter = new Counter();

        vm.stopBroadcast();
    }
}

// cast call 0x5fbdb2315678afecb367f032d93f642f64180aa3 "number()" --rpc-url http://127.0.0.1:8545/
