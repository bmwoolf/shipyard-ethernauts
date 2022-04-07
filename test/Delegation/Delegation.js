const { expect } = require("chai");
const { ethers } = require("hardhat");

let victim;
let attacker;
let hacker;
let delegateContract;
let deployer;

describe("Attacking Delegation", function () {
  beforeEach(async () => {
    [hacker, deployer] = await ethers.getSigners();
    const DelegateContract = await ethers.getContractFactory("Delegate");
    delegateContract = await DelegateContract.connect(deployer).deploy(
      deployer.address
    );
    const Victim = await ethers.getContractFactory("Delegation");
    victim = await Victim.connect(deployer).deploy(delegateContract.address);
    const Attacker = await ethers.getContractFactory("AttackingDelegation");
    attacker = await Attacker.deploy(victim.address);
  });

  // Get this to pass!
  it("Succesfully taken ownership", async () => {
    await attacker.hackContract({ gasLimit: 30000000 });
    const owner = await victim.owner();
    expect(owner).to.be.equal(attacker.address);
  });
});
