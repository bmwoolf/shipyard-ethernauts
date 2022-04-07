const { expect } = require("chai");
const { ethers } = require("hardhat");

const helper = async (victim, attacker) => {
  // add code here that will help you pass the test
  for (let i = 0; i < 10; i++) {
    await attacker.hackContract();
  }
};

module.exports = { helper };
