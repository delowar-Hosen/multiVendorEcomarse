import React from "react";
import Badgs from "./Badgs";
import Flex from "./Flex";
import Images from "./Images";
import { AiFillHeart } from "react-icons/ai";
import { SlReload } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ src, condition }) => {
  return (
    <div>
      <div className="group relative w-full overflow-y-hidden">
        <Images className="w-full" imagesrc={src} />
        {condition && <Badgs title="New" />}

        <div className="absolute bottom-[-56%] left-0 h-40 w-full bg-[#FFF]  py-6 pr-8 duration-300  ease-in group-hover:bottom-[0]">
          <Flex className="flex cursor-pointer justify-end">
            <p className="flex items-center font-dm text-base font-normal">
              Add to Wish List
              <AiFillHeart className="ml-4" />
            </p>
          </Flex>
          <Flex className="flex cursor-pointer justify-end py-5 ">
            <p className="flex items-center font-dm text-base font-normal">
              Compare
              <SlReload className="ml-4" />
            </p>
          </Flex>
          <Flex className="flex cursor-pointer justify-end ">
            <p className="flex items-center font-dm text-base font-bold">
              Add to Cart
              <FaShoppingCart className="ml-4" />
            </p>
          </Flex>
        </div>
      </div>
      <div className="w-full">
        <Flex className="mt-6 flex justify-between">
          <h4 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h4>
          <p className="font-noraml font-dm text-base">$44.00</p>
        </Flex>
        <p className="font-noraml mt-6 font-dm text-base">Black</p>
      </div>
    </div>
  );
};

export default Product;
