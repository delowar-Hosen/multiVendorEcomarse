import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Images from "./Images";
import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <div className=" pt-[140px] pb-[128]">
      <Container className="bg-[#F2F2F2]">
        <Flex className="flex">
          <div className="max-w-2/4 mr-10 h-auto">
            <Link to="#">
              <Images className="block" imagesrc="assests/ad-1.png" />
            </Link>
          </div>
          <div className="max-w-2/4">
            <Link to="#">
              <Images className="inline-block" imagesrc="assests/ad-2.png" />
            </Link>
            <Link to="#">
              <Images className="mt-[32px]" imagesrc="assests/ad-2.png" />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertise;
