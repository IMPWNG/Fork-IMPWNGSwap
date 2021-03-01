const { networks } = require("../truffle-config");
const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports =  async function (deployer, network) {
    let weth;
    const FACTORY_ADDRESS = '0x13a42F74D4Aea255E4B534A8085de347276727F4';

    if(network === 'mainet') {
        weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
    } else {
        await deployer.deploy(WETH);
        weth = await WETH.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};