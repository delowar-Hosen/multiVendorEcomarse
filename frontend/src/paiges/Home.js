import React from "react";
import Advertise from "../components/layout/Advertise";
import Banner from "../components/layout/Banner";
import Bannerbottom from "../components/layout/Bannerbottom";
import Bestsellers from "../components/layout/Bestsellers";
import Footerhome from "../components/layout/Footerhome";
import Middleadvertise from "../components/layout/Middleadvertise";
import Newarivals from "../components/layout/Newarivals";
import Specialoffers from "../components/layout/Specialoffers";

const Home = () => {
  return (
    <div>
      <Banner />
      <Bannerbottom />
      <Advertise />
      <Newarivals />
      <Bestsellers />
      <Middleadvertise />
      <Specialoffers />
      <Footerhome />
    </div>
  );
};

export default Home;
