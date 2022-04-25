var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "cousin spray path object search burst voice gossip economy alone aerobic eagle";
module.exports = {
  networks: {
    live: {
      provider: () => new HDWalletProvider(mnemonic, "http://172.23.112.1:7545"),
      host: "172.23.112.1",
      port: 7545,
      network_id: "*",
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/17826f64577a44f18e8da027404f3c29");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
    compilers: {
      solc: {
        version: "0.8.13"
      }
    }
  }
};