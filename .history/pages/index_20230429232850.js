import React, { useEffect, useContext, useState } from "react";


//INTERNAL IMPORT
import { CrowdFundingContext} from "../Context/CrowdFunding";
import { Hero, Card, PupUp } from "../Components";
const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaigns] = useState();
  const [userCampaigns, setUserCampaigns] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns
}