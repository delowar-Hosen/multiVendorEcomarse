import React from "react";
import { GoTriangleRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="my-28">
      <h1 className="font-dm text-5xl font-bold text-[#262626]">{title}</h1>
      <h6 className="fl flex items-center gap-x-2 font-dm text-sm font-normal text-[#767676]">
        <Link to="/">Home</Link> <GoTriangleRight />{" "}
        {window.location.pathname.split("/")[1]}
      </h6>
    </div>
  );
};

export default Breadcrumb;
