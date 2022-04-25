const { assert } = require("chai");
const Test = artifacts.require('Test')
contract('Test',() => {
    it('num0 should be 0',async () => {
        const testing = await Test.deployed();
        const test = await testing.num0();
        assert(test == 0);
    })
    it('num1 should be 1',async () =>{
        const testing = await Test.deployed();
        const test = await testing.num1();
        assert(test == 1);
    })
})