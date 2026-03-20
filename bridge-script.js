const { ethers } = require("hardhat");
const { ENDPOINTS } = require("./constants");

async function bridgeTokens(tokenAddress, destChainId, amount, recipient) {
    const token = await ethers.getContractAt("GlobalToken", tokenAddress);
    
    // Define call parameters for LayerZero
    const sendParam = [
        ENDPOINTS[destChainId],
        ethers.zeroPadValue(recipient, 32),
        amount,
        amount,
        "0x", // Extra options
        "0x", // Compose message
        "0x"  // OFT cmd
    ];

    // Estimate fees
    const [nativeFee] = await token.quoteSend(sendParam, false);

    // Execute bridge
    const tx = await token.send(sendParam, [nativeFee, 0], recipient, { value: nativeFee });
    await tx.wait();
    
    console.log(`Successfully initiated bridge of ${ethers.formatEther(amount)} tokens`);
}
