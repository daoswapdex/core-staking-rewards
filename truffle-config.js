const fs = require('fs');

const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = fs.readFileSync(".mnemonic").toString().trim();

module.exports = {
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://http-testnet.hecochain.com'),
      network_id: 256,
      // from: '0x25067E8678203d841aA05BBc19acb1A098E1c50c',
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://http-mainnet.hecochain.com'),
      network_id: 128,
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.17",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //   optimizer: {
      //     enabled: true,
      //     runs: 200
      //   },
      //   evmVersion: "istanbul"
      // }
    },
  },
};
