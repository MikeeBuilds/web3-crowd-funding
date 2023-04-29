mapping(uint256 => Campaign) public campaigns;

uint256 public numberOfCampaings = 0;

function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline) public returns (uint256) {
    require(_deadline > block.timestamp, "The deadline should be a date in the future");

    Campaign storage campaign = campaigns[numberOfCampaings];

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

    (bool sent, ) = payable(campaign.owner).call{value:amount}("");

    if(sent) {
        campaign.amountCollected += amount;
    }
}

function getDonators(uint256 _id) public view returns (address[] memory, uint256[] memory) {
    Campaign storage campaign = campaigns[_id];

    return (campaign.donators, campaign.donations);
}

function getCampaign(uint256 _id) public view returns (Campaign memory) {
    return campaigns[_id];
}
