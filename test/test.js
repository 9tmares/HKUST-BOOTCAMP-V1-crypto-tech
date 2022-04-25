const { assert } = require("chai");

const Test = artifacrs.require('Test')
contract('Test',() => {
    it('Test should be 0',async () => {
        const testing = await Test.deployed();
        const test = await testing.test();
        assert(test == 0);
    })
    it('Test2 should be 1',async () =>{
        const testing = await Test.deployed();
        const test = await testing.test2();
        assert(test2 == 1);
    })
})