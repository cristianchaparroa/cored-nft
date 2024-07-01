// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import { Test } from "forge-std/Test.sol";
import { Stone } from "../src/Stone.sol";

contract StoneTest is Test {
    Stone public stoneContract;
    address public owner;
    address public userAddress;

    function setUp() public {
        owner = address(this);
        userAddress = address(0x123);
        stoneContract = new Stone(owner);
    }

    function testDeployment() public view {
        assertEq(stoneContract.owner(), owner);
    }

    // testMinting will mint the asset on token1 to the userAddress
    // once the mint the asset the owner should point to the userAddress
    // once the mint the asset uri should point to the https://example.com/token1
    function testMinting() public {
        stoneContract.safeMint(userAddress, "https://example.com/token1");
        assertEq(stoneContract.ownerOf(0), userAddress);
        assertEq(stoneContract.tokenURI(0), "https://example.com/token1");
    }
}
