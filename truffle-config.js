var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "issue reopen before monster crazy spirit pond skate type elite differ help";
module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 8545,
   network_id: "*"
  },
  rinkeby: {
      provider: function() { 
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