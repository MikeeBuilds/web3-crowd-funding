import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import web3modal from "web3modal";

//Internal import
import { CrowdFundingABI, CrowdFundingAddress } from "./contants";

//fetch contract
const fetchContract = (signerOrProvider) =>
    new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);

//Context
