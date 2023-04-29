import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import web3modal from "web3modal";

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
        const web3Modal = new Wenb3Modal();
        const connection = await web3modal.conect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();