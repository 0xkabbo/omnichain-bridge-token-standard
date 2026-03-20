# Omnichain Bridge Token Standard 🌐

A professional-grade repository for deploying tokens that exist natively across multiple blockchains. By leveraging **LayerZero**, this implementation allows tokens to be "burned" on the source chain and "minted" on the destination chain, ensuring a unified supply and zero slippage.

## Features
- **LayerZero V2 Integration**: Built on the latest OFT (Omnichain Fungible Token) standards.
- **Unified Liquidity**: Eliminates the need for traditional bridges and wrapped assets.
- **Gas Efficiency**: Optimized cross-chain messaging logic.
- **Security**: Includes owner-based configuration for peer-to-peer chain linking.

## Architecture
- **GlobalToken.sol**: The main ERC20 contract with OFT capabilities.
- **LzConfig.js**: Configuration scripts for setting up cross-chain pathways.

## Deployment Steps
1. Deploy `GlobalToken.sol` on Chain A and Chain B.
2. Call `setPeer` on each contract to link them.
3. Use `send` to transfer tokens across chains.
