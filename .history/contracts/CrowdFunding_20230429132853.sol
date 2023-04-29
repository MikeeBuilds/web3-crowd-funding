// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string owner;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        address[] donators;
        address[] donations;
    }

    mapping(address => Campaign) public campaigns;

    uint256 public numberOfCampaings = 0;

    function createCampaign(address)


