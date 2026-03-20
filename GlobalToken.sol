// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@layerzerolabs/oft-evm/contracts/OFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title GlobalToken
 * @dev Implementation of the LayerZero OFT standard for cross-chain transfers.
 */
contract GlobalToken is OFT {
    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate
    ) OFT(_name, _symbol, _lzEndpoint, _delegate) Ownable(_delegate) {
        // Mint initial supply to the delegate/deployer on the primary chain
        if (block.chainid == 1) { // Example: Ethereum Mainnet
            _mint(_delegate, 1_000_000 * 10 ** decimals());
        }
    }
}
