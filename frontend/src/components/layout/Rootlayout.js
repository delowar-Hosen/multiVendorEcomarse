import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../../paiges/Home";
import Header from "./Header";
import Navbar from "./Navbar";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet/>
    </>
  );
};

export default Rootlayout;
