// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import { Stone } from "./Stone.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract StoneFactory is Ownable  {
    event  StoneCreated(address stoneAddress, address initialOwner);
    
    constructor(address initialOwner) Ownable(initialOwner) {}

    function createStone() public returns (address) {
        Stone s = new Stone(msg.sender);
        emit StoneCreated(address(s), msg.sender);
        return address(s);
    }
}

