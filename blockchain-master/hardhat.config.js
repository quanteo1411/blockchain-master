require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    bnbTestnet: {
      url: "https://bsc-testnet.public.blastapi.io/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: ["0xbde1d1af8b5de0a50049e202923c40cc03c0cf3547af80f3526713b7e425cc1f"],
    },
  },
};
