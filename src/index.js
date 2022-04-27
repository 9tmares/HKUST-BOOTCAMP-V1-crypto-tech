const Web3 = require('web3');
const MyContract = require('../build/contracts/Test.json');
const web3 = new Web3('http://172.29.96.1:7545');
const address = '0xF317CF73934e521B930B37505E70BE13346FEcD6';
const privateKey = 'e049e8558db92f643df0ccb7eebc021502d444123194c7d3ba3dc1953c05353a';
let contract;
const init = async () => {
    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    contract = new web3.eth.Contract(MyContract.abi,deployedNetwork.address);
    let result = await contract.methods.num0().call();
    console.log(result);
}
init();
// const result = await contract.methods.num0().call();
// console.log(result);