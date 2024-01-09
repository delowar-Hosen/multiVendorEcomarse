import React, { useEffect } from "react";
import {
  FolderAddOutlined,
  OrderedListOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";

import { Menu } from "antd";
import { BiCategoryAlt, BiCategory } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { validateUser } from "../features/userCheck/userValidate";

const Home = () => {
  //here state for management
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //here sub maenu for dashboard
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Product", "sub1", <OrderedListOutlined />, [
      getItem("Add Product", "/addproduct"),
      getItem("Product List", "/productlist"),
      getItem("Varient List", "/varientlist"),
    ]),
    {
      type: "divider",
    },
    getItem("Category", "sub2", <BiCategoryAlt />, [
      getItem("Add Category", "/addcategory"),
      getItem("All Category ", "4"),
    ]),
    {
      type: "divider",
    },
    getItem("Sub-Category", "sub3", <BiCategory />, [
      getItem("Add Sub-Category", "5"),
      getItem("All Sub-Category", "6"),
    ]),
    {
      type: "divider",
    },
    getItem("Users List", "sub4", <BiCategory />, [
      getItem("Merchant", "7"),
      getItem("Users", "8"),
    ]),
    {
      type: "divider",
    },
    getItem("Discount", "sub5", <MdOutlineDiscount />, [
      getItem("Add Discount", "9"),
      getItem("All Discount", "10"),
    ]),
    `${
      user &&
      user.role == "admin" &&
      getItem("Approved", "sub6", <FolderAddOutlined />, [
        getItem("Merchant", "11"),
        getItem("Category", "12"),
        getItem("Sub-Category", "13"),
      ])
    },`,
  ];

  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };

  let logOut = () => {
    dispatch(validateUser());
    navigate("/login");
    localStorage.removeItem("userInfo");
  };

  return (
    <div>
      <Row>
        <Col className=" relative h-screen mr-[30px] bg-[#dddddd6b]" span={5}>
          <Menu
            onClick={onClick}
            style={{
              width: 283,
            }}
            mode="inline"
            items={items}
          />
          <div className=" absolute bottom-10 left-0  ">
            <div className="w-[283px] rounded-lg py-4 bg-[#ffffff] bg-[]">
              <div className="  ml-5 flex">
                <div
                  onClick={logOut}
                  className="text-2xl flex items-center cursor-pointer"
                >
                  <LogoutOutlined />
                  <p className="ml-10">Log Out</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
