const { expect } = require("chai");
// const { ethers } = require("hardhat");
const { helper } = require("./VaultHelper");

let victim;

describe("Attacking Vault", function () {
  beforeEach(async () => {
    const Victim = await ethers.getContractFactory("Vault");
    victim = await Victim.deploy(
      ethers.utils.formatBytes32String("A very strong password")
    );
  });

  // Get this to pass!
  it("Succesfully unlock the vault", async () => {
    await helper(victim);
    const locked = await victim.locked();
    expect(locked).to.be.equal(false);
  });
});
