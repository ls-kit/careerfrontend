import React from "react";
import { Link, useParams } from "react-router-dom";
import ListItem from "../components/OurTeams/ListItem";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import HeaderShapeTitle from "../components/shared/HeaderShapeTitle";
import TopHeader from "../components/shared/TopHeader";

const TeamList = () => {
  const { teamType } = useParams();

  let headTitle = teamType;
  if (teamType == "public") {
    headTitle = `${teamType} university`;
  }
  if (teamType == "private") {
    headTitle = `${teamType} university`;
  }

  console.log("teamType", teamType);
  const districtList = [
    "Dinajpur",
    "Rangpur",
    "Bogra",
    "Rajshahi",
    "Jashore",
    "Jashore",
    "Noakhali",
    "Pabna",
  ];
  const thanaList = [
    "Betagi",
    "Patharghata",
    "Amtali",
    "Taltali",
    "Kanthalia",
    "Rajapur",
    "Kawnia",
    "Rupatali",
  ];
  const publicVersityList = [
    "University of Dhaka",
    "University of Rajshahi",
    "University of Chittagong",
    "Jahangirnagar University",
    "Khulna University",
    "Jagannath University",
    "Comilla University",
    "University of Barisal",
  ];

  const privateVersityList = [
    "BRAC University",
    "Bangladesh University ",
    "Leading University",
    "Premier University",
    "Southeast University ",
    "Prime University",
    "City University",
    "Eastern University",
  ];
  const collegeList = [
    "Dhaka College",
    "Titumir College",
    "Eden Mohila College",
    "KNG College",
    "MGB College",
    "BBG WCollege ",
    "GSSuhrawardi College ",
  ];

  /*
   ***** Decide what is render for dynamic team
   */
  let team = "";
  //   district team
  if (teamType === "districts") {
    team = districtList.map((district) => (
      <Link to={`${district}`} key={district}>
        <ListItem item={district} />
      </Link>
    ));
  }

  // upazila   team
  if (teamType === "upazila") {
    team = thanaList.map((thana) => (
      <Link to={`${thana}`} key={thana}>
        <ListItem item={thana} />
      </Link>
    ));
  }

  // public versity   team
  if (teamType === "public") {
    team = publicVersityList.map((pubVersity) => (
      <Link to={`${pubVersity}`} key={pubVersity}>
        <ListItem item={pubVersity} />
      </Link>
    ));
  }

  // private versity   team
  if (teamType === "private") {
    team = privateVersityList.map((versity) => (
      <Link to={`${versity}`} key={versity}>
        <ListItem item={versity} />
      </Link>
    ));
  }

  // 7college   team
  if (teamType === "7college") {
    team = collegeList.map((college) => (
      <Link to={`${college}`} key={college}>
        <ListItem item={college} />
      </Link>
    ));
  }

  return (
    <div>
      <TopHeader />
      <Header />
      <HeaderShapeTitle title={`${headTitle}  Team List`} />
      <div className='container mx-auto px-3 pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2 '>{team}</div>
      </div>
      {/* {teamType === "districts" ? <DistrictList /> : <ThanaList />} */}
      <Footer />
    </div>
  );
};

export default TeamList;
