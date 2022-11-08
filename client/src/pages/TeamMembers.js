import React from "react";
import { useParams } from "react-router-dom";
import MemberList from "../components/OurTeams/MemberList";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import TopHeader from "../components/shared/TopHeader";
import HeaderShapeTitle from "../components/shared/HeaderShapeTitle";

const TeamMembers = () => {
  const { teamName } = useParams();
  console.log("teamName", teamName);
  return (
    <div>
      <TopHeader />
      <Header />
      <HeaderShapeTitle title={`${teamName} Team`} />
      <MemberList teamName={teamName} />
      <Footer />
    </div>
  );
};

export default TeamMembers;
