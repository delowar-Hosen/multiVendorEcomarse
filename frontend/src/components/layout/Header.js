import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import List from "./List";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { RxAvatar, RxCross2 } from "react-icons/rx";
import { BsFillCartFill } from "react-icons/bs";
import ListItems from "./ListItems";
import Flex from "./Flex";
import Images from "./Images";

const Header = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  let ref = useRef();
  let ref2 = useRef();
  let ref3 = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else if (ref2.current.contains(e.target)) {
        setShow2(true);
      } else if (ref3.current.contains(e.target)) {
        setShow3(true);
      } else {
        setShow(false);
        setShow2(false);
        setShow3(false);
      }
    });
  });

  return (
    <div className="bg-[#F5F5F3] pt-6 pb-6">
      <Container>
        <Flex className="flex items-center justify-between">
          <Dropdown className="relative z-10" dropref={ref}>
            <p className="flex items-center font-dm text-sm font-normal text-[#262626]">
              <HiBars3BottomLeft className="mr-2.5" />
              Shop by Category
            </p>
            {show && (
              <List className="absolute top-8 w-[263px] bg-black font-dm text-sm font-normal text-[#767676]">
                <ListItems
                  className="border border-[#2D2D2D] px-5 py-3.5 hover:px-8 hover:text-white"
                  listname="Accesories"
                />
                <ListItems
                  className="border border-[#2D2D2D] px-5 py-3.5 hover:px-8 hover:text-white"
                  listname="Furniture"
                />
                <ListItems
                  className="border border-[#2D2D2D] px-5 py-3.5 hover:px-8 hover:text-white"
                  listname="Electronics"
                />
                <ListItems
                  className="border border-[#2D2D2D] px-5 py-3.5 hover:px-8 hover:text-white"
                  listname="Clothes"
                />
                <ListItems
                  className="border border-[#2D2D2D] px-5 py-3.5 hover:px-8 hover:text-white"
                  listname="Bags"
                />
                <ListItems
                  className="border border-[#2D2D2D] px-5 py-3.5 hover:px-8 hover:text-white"
                  listname="Home appliances"
                />
              </List>
            )}
          </Dropdown>
          <div className="relative w-[601px] bg-[#F5F5F3]">
            <input
              className="w-full py-4 px-5 font-dm text-sm font-normal text-[#C4C4C4]  outline-0"
              placeholder="Search Products"
            />
            <AiOutlineSearch className="absolute top-[20px] right-[20px]" />
          </div>
          <Flex className="flex">
            <Dropdown className="relative z-10" dropref={ref2}>
              <div className="flex">
                <RxAvatar className="mr-2" />
                <GoTriangleDown />
              </div>
              {show2 && (
                <List className="absolute top-8 right-0 w-[200px] bg-black text-center font-dm text-sm font-bold text-white ">
                  <ListItems
                    className="border border-[#2D2D2D] py-3.5 hover:bg-white hover:text-black"
                    listname="My Account"
                  />
                  <ListItems
                    className="border border-[#2D2D2D] py-3.5 hover:bg-white hover:text-black"
                    listname="Log Out"
                  />
                </List>
              )}
            </Dropdown>
            <Dropdown className="relative z-10 ml-10" dropref={ref3}>
              <BsFillCartFill />
              {show3 && (
                <div className="absolute top-8 right-0 w-[360px]">
                  <Flex className="flex bg-[#F5F5F3]  p-5 ">
                    <Images
                      className="h-[80px] w-[80px]"
                      imagesrc="assests/image.png"
                    />
                    <List className=" mt-5 ml-4 font-dm text-sm font-bold ">
                      <ListItems
                        className="mb-2"
                        listname="Black Smart Watch"
                      />
                      <ListItems listname="$ 44.00" />
                    </List>
                    <RxCross2 className="absolute top-[65px]  right-10 font-dm font-bold" />
                  </Flex>
                  <div className="mt-3 bg-[##FFFFFF] p-5 font-dm text-sm  font-bold ">
                    <p>
                      Subtotal:
                      <span className="ml-2 font-dm text-base font-bold">
                        $44.00
                      </span>
                    </p>
                    <Flex className="flex justify-between pt-2.5">
                      <button className="border border-[#2B2B2B] bg-black py-4 px-10 font-dm text-sm font-bold text-white hover:bg-white hover:text-black">
                        View Cart
                      </button>
                      <button className="border border-[#2B2B2B] bg-black py-4 px-10 font-dm text-sm font-bold text-white hover:bg-white hover:text-black">
                        Checkout
                      </button>
                    </Flex>
                  </div>
                </div>
              )}
            </Dropdown>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
