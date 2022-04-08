const { expect } = require("chai");
const { ethers } = require("hardhat");

const helper = async (victim) => {
  /* 
    Add code here that will help you pass the test
    Note: Unlock without using the string "A very strong password"
    Unlock the vault by somehow reading the private password from 
    Vault directly
  */

  // need to pass in the same password as the one in the contract
  // read from private var in contract
  // pass in
  /// ethers.getStorageAt()
  console.log("ethers", ethers);
  const zeroStorageSlot = await ethers.getStorageAt(victim.address, 0);
  console.log("zeroStorageSlot", zeroStorageSlot);
  const passwordStorageSlot = await ethers.getStorageAt(victim.address, 1);
  console.log("passwordStorageSlot", passwordStorageSlot);
};

module.exports = { helper };
