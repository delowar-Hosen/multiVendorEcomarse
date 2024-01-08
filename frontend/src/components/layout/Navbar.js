import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Images from "./Images";
import List from "./List";
import ListItems from "./ListItems";

const Navbar = () => {
  return (
    <>
      <nav className="mt-8 mb-8">
        <Container className="bg-primary">
          <Flex className="flex">
            <picture>
              <Images imagesrc="assests/logo.png" />
            </picture>

            <List className=" flex w-100 m-auto font-dm font-bold text-sm text-[#767676] gap-x-10 ">
              <ListItems className="hover:text-[#262626]" listname="Home" />
              <ListItems className="hover:text-[#262626]" listname="Shop" />
              <ListItems className="hover:text-[#262626]" listname="About" />
              <ListItems className="hover:text-[#262626]" listname="Contact" />
              <ListItems className="hover:text-[#262626]" listname="Journal" />
            </List>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
