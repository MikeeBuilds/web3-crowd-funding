import React, { useEffect, useContext, useState } from "react";


//INTERNAL IMPORT
import { CrowdFundingContext} from "../Context/CrowdFunding";
import { Hero, Card, PupUp } from "../Components";

const IndexPage = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllCampaigns] = useState();
  const [userCampaigns, setUserCampaigns] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      setAllCampaigns(allData);
      setUserCampaigns(userData);
    }; 
  }, []);


  //DONATE POPUP MODEL
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  return (
    <>
    <Hero titleData={titleData} createCampaign={createCampaign} />

    <Card 
      title="All Listed Campaign"
      allcampaign={allcampaign}
      setOpenModel={setOpenModel}
      setDonate={setDonateCampaign}
    />

    <Card
      title="created Campaign"
      allcampaign={userCampaigns}
      setOpenModel={setOpenModel}
      setDonate={setDonateCampaign}
    />

    {openModel && (
      <PupUp
        setOpenModel={setOpenModel}
        getDonations={getDonations}
        donate={donateCampaign}
        donateFunction={donate}
        />
    )}
    </>
  );
};


export default IndexPage;