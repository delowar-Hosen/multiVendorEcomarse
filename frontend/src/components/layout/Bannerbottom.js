import Container from "./Container";
import React from "react";
import { TbNumber2 } from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import Flex from "./Flex";

const Bannerbottom = () => {
  return (
    <div className="bg-[#F0F0F0]">
      <Container className="py-7">
        <Flex className="flex justify-between">
          <div>
            <p className="flex  items-center">
              <span className="font-dm text-base font-normal text-[#6D6D6D]">
                <TbNumber2 className=" mr-[15px] font-dm text-[20px] font-bold text-[#262626]" />
              </span>
              Two years warranty
            </p>
          </div>
          <div>
            <p className="flex items-center">
              <span className="font-dm text-base font-normal text-[#6D6D6D]">
                <MdLocalShipping className=" mr-[15px] font-dm text-[20px] font-bold text-[#262626]" />
              </span>
              Free shipping
            </p>
          </div>
          <div>
            <p className="flex  items-center">
              <span className="font-dm text-base font-normal text-[#6D6D6D]">
                <AiOutlineReload className=" mr-[15px] font-dm text-[20px] font-bold text-[#262626]" />
              </span>
              Return policy in 30 days
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Bannerbottom;
