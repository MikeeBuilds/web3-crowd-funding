import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3modal from "web3modal";

//Internal import
import { CrowdFundingABI, CrowdFundingAddress } from "./contants";

//fetch contract
const fetchContract = (signerOrProvider) =>
    new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);

//Context
export const CrowdFundingContext = React.createContext();

//Provider
export const CrowdFundingProvider = ({ children }) => {
    const titleData = "Crowd Funding Contract";
    const [currentAccount, setCurrentAccount] = useState("");

    const createCampaign = async (campaign) => {
        const { title, description, amount, deadline } = campaign;
        const web3Modal = new Web3Modal();
        const connection = await web3modal.conect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner(); 
        const contract = fetchContract(signer);

        console.log(currentAccount);
        try {
            const transaction = await contract.createCampaign(
                title, // title
                description, // description
                ethers.utils.parseUnits(amount, 18),
                new Date(deadline).getTime() // deadline,
            );
            await transaction.wait();

            console.log("Transaction Mined", transaction);
        } catch (error) {
            console.log("Mine Failure", error);
        }
    };

    const getCampaigns = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const campaigns = await contract.getCampaigns();

        const parsedCampaigns = campaign.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.tonumber(),
            amountCollected: ethers.utils.formatEther(
                campaign.amountCollected.toString()
            ),
            pId: i,
        }));

        return parsedCampaigns;
    }

    const getUserCampaigns = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const allCampaigns = await contract.getCampaigns();

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const currentUser = accounts[0];

        const filteredCampaigns = allCampaigns.filter(
            (campaign) => 
                campaign.owner === "0xf39Fd6e51aad88F6F4ce6aB8827229cffFb92266"
        );

        const userData = filteredCampaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.tonumber(),
            amountCollected: ethers.utils.formatEther(
                campaign.amountCollected.toString()
            ),
            pId: i,
        }));

        return userData;
    };

    const donate = async (pId, amount) => {
        const web3Modal = new Wenb3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

            const campaignData = await contract.donateToCampaign(pId, {
                value: ethers.utils.parseEther(amount),
            });
            await transaction.wait();
            location.reload();

            return campaignData;
    };

    const getDonations = async (pId) => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const donations = await contract.getDonations(pId);
        const numberOfDonations = donations[0].length;

        const parsedDonations = [];

        for (let i = 0; i < numberOfDonations; i++) {
            donator: donations[0][i],
            donation: ethers.utils.formatEther(donations[1][i].toString()),
            })        
        };
    }

