import React from "react";

const Badgs = ({ title }) => {
  return (
    <span className="absolute top-5 left-5 bg-[#262626] py-2 px-8 font-dm text-base font-normal text-white">
      {title}
    </span>
  );
};

export default Badgs;
