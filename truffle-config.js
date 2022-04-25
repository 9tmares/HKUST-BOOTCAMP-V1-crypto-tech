module.exports = {
  networks: {
    live: {
      host: "172.23.112.1",
      port: 7545,
      network_id: "*"
    },
    compilers: {
      solc: {
        version: "0.8.13"
      }
    }
  }
};