import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`${className}  max-w-container  m-auto`}>{children}</div>
  );
};

export default Container;
