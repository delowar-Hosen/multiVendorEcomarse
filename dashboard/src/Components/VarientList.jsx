import React, { useEffect, useState } from "react";
import { Space, Table, Button } from "antd";
import axios from "axios";

const VarientList = () => {
  const [varient, setVarient] = useState([]);

  const columns = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
    },
   
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
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

  useEffect(() => {
    async function getData() {
      let { data } = await axios.get(
        "http://localhost:8000/api/v1/product/getvarient"
      );

      let arr = [];
      data.map((Item, index) => {
        arr.push({
          key: Item._id,
          serial: index + 1,
          image: <img style={{ width: 80 }} src={Item.image} />,
        });

        console.log(data);
      });

      setVarient(arr);
    }

    getData();
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={varient} />
    </div>
  );
};

export default VarientList;
