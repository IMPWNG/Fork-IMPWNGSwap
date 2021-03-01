// SPDX-License-Identifier: MIT
pragma solidity =0.5.16;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IMP is ERC20Detailed, ERC20 {
    constructor() ERC20Detailed("Importateur", "IMP", 18) public {}

}