import React from "react";

const ListItems = ({ listname, className }) => {
  return <li className={className}>{listname}</li>;
};

export default ListItems;
