// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Test } from "forge-std/Test.sol";
import { Stone } from "../src/Stone.sol";
import { Factory } from "../src/Factory.sol";

contract StoneFactoryTest is Test {
    Factory private factory;

    address private aliceUser = address(0x123);
    address private rabbitUser = address(0x456);

    address private joeReceiver = address(0x789);
    address private doeReceiver = address(0xabc);

    function setUp() public {
        factory = new Factory(address(this));
    }

    function testCreateMultipleStones() public {
        vm.prank(aliceUser);
        address firstAliceStoneAdd = factory.createStone();     // create a Stone contract for alice
        Stone firstAliceStone = Stone(firstAliceStoneAdd);      // instance the Stone based on the address generated 
        assertEq(firstAliceStone.owner(), aliceUser);           // validate the ownership

        vm.prank(aliceUser);
        address secondAliceStoneAdd = factory.createStone();
        Stone secondAliceStone = Stone(secondAliceStoneAdd);
        assertEq(secondAliceStone.owner(), aliceUser);


        vm.prank(rabbitUser);
        address  firstRabbitStoneAdd = factory.createStone();
        Stone firstRabbitStone = Stone(firstRabbitStoneAdd);
        assertEq(firstRabbitStone.owner(), rabbitUser);

        vm.prank(rabbitUser);
        address secondRabbitStoneAdd = factory.createStone();
        Stone secondRabbitStone = Stone(secondRabbitStoneAdd);
        assertEq(secondRabbitStone.owner(), rabbitUser);
    }

    function testSafeMintForMultipleStones() public {
        vm.prank(aliceUser);
        address firstAliceStoneAdd = factory.createStone();
        Stone firstAliceStone = Stone(firstAliceStoneAdd);

        vm.prank(aliceUser);
        firstAliceStone.safeMint(joeReceiver, "ipfs://wonderland/first-alice-nft"); // mint the first alice nft to joe
        assertEq(firstAliceStone.ownerOf(0), joeReceiver);
        assertEq(firstAliceStone.tokenURI(0), "ipfs://wonderland/first-alice-nft");

        vm.prank(rabbitUser);
        address firstRabbitStoneAdd = factory.createStone();
        Stone firstRabbitStone = Stone(firstRabbitStoneAdd);

        vm.prank(rabbitUser);
        firstRabbitStone.safeMint(doeReceiver, "ipfs://wonderland/first-rabbit-nft"); // mint the first rabbit nft to doe
        assertEq(firstRabbitStone.ownerOf(0), doeReceiver);
        assertEq(firstRabbitStone.tokenURI(0), "ipfs://wonderland/first-rabbit-nft");


        vm.prank(rabbitUser);
        address secondRabbitStoneAdd = factory.createStone();
        Stone secondRabbitStone = Stone(secondRabbitStoneAdd);

        vm.prank(rabbitUser);
        secondRabbitStone.safeMint(joeReceiver, "ipfs://wonderland/second-rabbit-nft");
        
        assertEq(secondRabbitStone.ownerOf(0), joeReceiver);
        assertEq(secondRabbitStone.tokenURI(0),"ipfs://wonderland/second-rabbit-nft");
        
    }
}
