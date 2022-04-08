const { expect } = require("chai");

const helper = async (victim) => {
  /* 
    Add code here that will help you pass the test
    Note: Unlock without using the string "A very strong password"
    Unlock the vault by somehow reading the private password from 
    Vault directly
  */

  // 0x412076657279207374726f6e672070617373776f726400000000000000000000
  const passwordStorageSlot = await ethers.provider.getStorageAt(
    victim.address,
    1
  );

  await victim.unlock(passwordStorageSlot);
};

module.exports = { helper };
