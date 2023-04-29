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

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;


        numberOfCampaings++;

        return numberOfCampaings - 1;
       }


       function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;


        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent, ) = payable(campaign.owner).call{value:amount}("";)
       }


