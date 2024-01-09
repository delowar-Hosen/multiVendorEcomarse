import React, { useEffect, useState } from "react";
import { Space, Table, Button } from "antd";
import axios from "axios";

const CategoryList = () => {
  const columns = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Store",
      dataIndex: "store",
      key: "store",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>{" "}
          <Button
            type="primary"
            onClick={() => handleDelate(record.key)}
            danger
          >
            Delate
          </Button>
        </Space>
      ),
    },
  ];

  const [Category, setCategory] = useState([]);

  let handleDelate = async (id) => {
    await axios.post("http://localhost:8000/api/v1/product/delateproduct", {
      id,
    });
  };

  useEffect(() => {
    async function getData() {
      let { data } = await axios.get(
        "http://localhost:8000/api/v1/category/getallcategory"
      );

      let arr = [];
      data.map((Item, index) => {
        arr.push({
          key: Item._id,
          serial: index + 1,
          name: Item.name,
          image: (
            <img
              style={{ width: 80 }}
              src="https://www.startech.com.bd/image/cache/catalog/monitor/dahua/dhi-lm22-b201sw/dhi-lm22-b201sw-01-500x500.webp"
            />
          ),
          description: Item.description,
        });
      });

      setCategory(arr);
    }

    getData();
  }, []);

  return <Table columns={columns} dataSource={Category} />;
};

export default CategoryList;
