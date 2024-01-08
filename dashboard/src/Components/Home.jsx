import React, { useEffect } from "react";
import { FolderAddOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

import { Menu } from "antd";
import { BiCategoryAlt, BiCategory } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
    getItem("Add Category", "3"),
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
  getItem("Approved", "sub6", <FolderAddOutlined />, [
    getItem("Merchant", "11"),
    getItem("Category", "12"),
    getItem("Sub-Category", "13"),
  ]),
];

const Home = () => {
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };

  return (
    <div>
      <Row>
        <Col span={5}>
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            mode="inline"
            items={items}
          />
        </Col>
        <Col span={19}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
