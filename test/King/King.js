const { expect } = require("chai");
const { ethers } = require("hardhat");

let victim;
let attacker;
let hacker;
let deployer;
let kingPlayer;

describe("Attacking King", function () {
  beforeEach(async () => {
    [hacker, deployer, kingPlayer] = await ethers.getSigners();
    const Victim = await ethers.getContractFactory("King");
    victim = await Victim.connect(deployer).deploy({
      value: ethers.utils.parseEther("1"),
    });
    const Attacker = await ethers.getContractFactory("AttackingKing");
    attacker = await Attacker.connect(hacker).deploy(victim.address, {
      value: ethers.utils.parseEther("5"),
    });
  });

  // Get this to pass!
  it("Succesfully become and remain the king forever", async () => {
    await attacker.hackContract({ gasLimit: 30000000 });
    try {
      await kingPlayer.sendTransaction({
        value: ethers.utils.parseEther("100"),
        to: victim.address,
        gasLimit: 30000000,
      });
    } catch (error) {
      console.log("error: ", error);
    }
    const king = await victim._king();
    expect(king).to.not.equal(kingPlayer.address);
  });
});
