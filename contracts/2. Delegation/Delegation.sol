// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Delegate {
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function pwn() public {
        owner = msg.sender;
    }
}

contract Delegation {
    address public owner;
    Delegate public delegate;

    constructor(address _delegateAddress) {
        delegate = Delegate(_delegateAddress);
        owner = msg.sender;
    }

    // fallback, has no name
    fallback() external {
        // 
        (bool result, ) = address(delegate).delegatecall(msg.data);
        if (result == true) {
            this;
        }
    }
}
