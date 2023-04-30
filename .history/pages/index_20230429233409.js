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
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllcampaigns(allData);
      setUserCampaigns(userData);
    }; 
  }, []);


  //DONATE POPUP MODEL
  const [openModel, setOpenModel] = useState(false);
  const [donateData, setDonateData] = useState();
  return (
    <>
    <Hero titleData={titleData} createCampaign={createCampaign} />

    <Card 
    title="All Listed Campaign"
    </>
  )
}