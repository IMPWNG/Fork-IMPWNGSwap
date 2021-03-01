const Factory = artifacts.require("UniswapV2Factory.sol");
const Imp = artifacts.require("Imp.sol");
const Wng = artifacts.require("Wng.sol");

module.exports = async function (deployer, network, addresses) {
    await deployer.deploy(Factory, addresses[0]);
    const factory = await Factory.deployed();

    let impAddress, wngAddress;
    if (network === 'mainent') {
        impAddress = '';
        wngAddress = '';
    } else {
        await deployer.deploy(Imp);
        await deployer.deploy(Wng);
        const imp = await Imp.deployed();
        const wng = await Wng.deployed();
        impAddress = imp.address;
        wngAddress = wng.address;
    }
    await factory.createPair(impAddress, wngAddress);
};
