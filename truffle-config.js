const fs = require('fs');

const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonicTestnet = fs.readFileSync("../mnemonic/.mnemonic-testnet").toString().trim();
const mnemonicMainnet = fs.readFileSync("../mnemonic/.mnemonic-mainnet").toString().trim();
const apiKeysBscscan = fs.readFileSync("../mnemonic/.api_keys_bscscan").toString().trim();

module.exports = {
  networks: {
    hecotestnet: {
      provider: () => new HDWalletProvider(mnemonicTestnet, 'https://http-testnet.hecochain.com'),
      network_id: 256,
      // from: '0xa9bB710996d6ed61B83a5EAB583bAe683199c2de',        // Account to send txs from (default: accounts[0])
      // gas: 550000,        // Ropsten has a lower block limit than mainnet
      // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    hecomainnet: {
      provider: () => new HDWalletProvider(mnemonicMainnet, 'https://http-mainnet.hecochain.com'),
      network_id: 128,
      // from: '0xa9bB710996d6ed61B83a5EAB583bAe683199c2de',        // Account to send txs from (default: accounts[0])
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    bsctestnet: {
      provider: () => new HDWalletProvider(mnemonicTestnet, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      // confirmations: 10,
      // timeoutBlocks: 200,
      // skipDryRun: true
    },
    bscmainnet: {
      // provider: () => new HDWalletProvider(mnemonicMainnet, `https://bsc-dataseed1.binance.org`),
      // provider: () => new HDWalletProvider(mnemonicMainnet, `https://bsc-dataseed1.ninicoin.io`),
      provider: () => new HDWalletProvider(mnemonicMainnet, `https://bsc-dataseed2.defibit.io`),
      network_id: 56,
      gas: 60000000,
      gasPrice: 3000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // confirmations: 10,
      // timeoutBlocks: 200,
      // skipDryRun: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  plugins: ['truffle-plugin-verify'],
  api_keys: {
    bscscan: apiKeysBscscan,
    hecoinfo: ''
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
