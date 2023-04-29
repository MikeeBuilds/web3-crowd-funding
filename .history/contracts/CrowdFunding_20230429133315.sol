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

    function createCampaign(address _owner, string memory _title, string memory
       _description, uint256 _target, uint256 _deadline) public returns (uint256) {
        Campaign storage Campaign = campaigns[numberofCampaigns];

        require(campaign._deadline < block.timestamp, "The deadline should be a date in the future");
       }


