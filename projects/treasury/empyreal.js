const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0xF548a58DB6d86d466acd00Fc0F6De3b39Ea129D7";


const EMP= "0x0DDCE00654f968DeD59A444da809F2B234047aB1";


module.exports = treasuryExports({
  arbitrum: {
    tokens: [ 
        nullAddress,
        "0x912CE59144191C1204E64559FE8253a0e49E6548", //ARB
        "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", //USDC
     ],
    owners: [treasury],
    ownTokens: [EMP],
  },
})