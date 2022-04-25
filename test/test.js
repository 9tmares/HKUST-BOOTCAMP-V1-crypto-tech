const { assert } = require("console");
const Test = artifacts.require('Test')
contract('Test',() => {
    it('num0 should be 0',async () => {
        const testing = await Test.deployed();
        const num0 = await testing.num0();
        assert(num0 == 0);
    })
    it('num1 should be 1',async () => {
        const testing = await Test.deployed();
        const num1 = await testing.num1();
        assert(num1 == 1);
    })
})