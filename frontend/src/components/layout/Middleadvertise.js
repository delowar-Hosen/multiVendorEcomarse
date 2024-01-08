import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Images from "./Images";

const Middleadvertise = () => {
  return (
    <div className="mt-32 mb-32">
      <Container>
        <Link to="#">
          <Images imagesrc="assests/middle-ad.png" />
        </Link>
      </Container>
    </div>
  );
};

export default Middleadvertise;
