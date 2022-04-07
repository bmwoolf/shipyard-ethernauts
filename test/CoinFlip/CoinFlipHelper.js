const { expect } = require("chai");
const { ethers } = require("hardhat");

const helper = async (victim, attacker) => {
  // add code here that will help you pass the test
  console.log("victim", victim, "attacker", attacker);
};

// export default helper;
module.exports = { helper };
