import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import Images from "./Images";
import ListItems from "./ListItems";
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import Copyright from "./Copyright";

const Footerhome = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex">
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Home"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Shop"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="About"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Contact"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Category 1"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Category 2"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Category 3"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Category 4"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Privacy Policy"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Terms & Conditions"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Special E-shop"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Shipping"
                href="#"
              />
              <ListItems
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                listname="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex w-[30%] justify-center">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="w-[40%]">
            <Images imagesrc="assests/logo.png" />
          </div>
        </Flex>
        <Flex className="mt-16 flex justify-between">
          <Flex className="flex text-base">
            <RiFacebookFill />
            <FaLinkedinIn className="mx-[25px]" />
            <BsInstagram />
          </Flex>
          <Copyright />
        </Flex>
      </Container>
    </div>
  );
};

export default Footerhome;
