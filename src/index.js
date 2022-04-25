const Web3 = require('web3');
const MyContract = require('../build/contracts/Test.json');
const web3 = new Web3('http://172.23.112.1:7545');
const address = '0x7a85df266f415F39FCbfd09D6Ddef3f51b4dad60';
const privateKey = 'b05160f84487e921349d3edc3db046359ec7302f6fd7233851a8664274d23daa';
const init = async () => {
    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    const contract = new web3.eth.Contract(MyContract.abi,deployedNetwork.address);
    const result = await contract.methods.num0().call();
    console.log(result);
}

init();