import React from "react";
import { Alert, Button } from "antd";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <Alert
        message="Error"
        description="The link you have entered this not exists."
        type="error"
        showIcon
      />
      <div style={{ width: "200px", marginTop: "20px" }}>
        <Link to="/">
          <Button type="dashed" block>
            Back To Home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Error;
