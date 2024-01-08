import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Product from "./Product";

const Newarivals = () => {
  return (
    <div>
      <Container>
        <Heading title="New Arrivals" />
        <Flex className="mt-12 mb-28 flex justify-between">
          <div className=" max-w-[370px]">
            <Product src="assests/p-1.png" condition={true} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assests/p-1.png" condition={true} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assests/p-1.png" condition={false} />
          </div>
          <div className="max-w-[370px]">
            <Product src="assests/p-1.png" condition={true} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Newarivals;
