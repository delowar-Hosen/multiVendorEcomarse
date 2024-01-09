import React, { useEffect, useState } from "react";
import { Table, Select } from "antd";
import axios from "axios";

const SubCategoryStatus = () => {
  const [subCategory, setSubCategory] = useState([]);

  const handleChange = (value) => {
    axios.post("http://localhost:8000/api/v1/category/subcategorystatus", {
      name: subCategory[0].name,
      status: value,
    });
  };

  const columns = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      filters: [
        {
          text: "Active",
          value: "Active",
        },
        {
          text: "InActive",
          value: "InActive",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (subCategory) => (
        <Select
          defaultValue={subCategory}
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Approved",
              label: "Approved",
            },
            {
              value: "Rejected",
              label: "Rejected",
            },
            {
              value: "Waitng",
              label: "Waitng",
            },
          ]}
        />
      ),
      filters: [
        {
          text: "Approved",
          value: "Approved",
        },
        {
          text: "Waiting",
          value: "Waiting",
        },
        {
          text: "Rejected",
          value: "Rejected",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  let handleDelate = async (id) => {
    await axios.post("http://localhost:8000/api/v1/product/delateproduct", {
      id,
    });
  };

  useEffect(() => {
    async function getData() {
      let { data } = await axios.get(
        "http://localhost:8000/api/v1/category/getallsubcategory"
      );

      let arr = [];
      data.map((Item, index) => {
        arr.push({
          key: Item._id,
          serial: index + 1,
          name: Item.name,
          description: Item.description,
          active: String(Item.isActive),
          status: Item.status,
        });
      });
      setSubCategory(arr);
    }

    getData();
  }, []);

  return <Table columns={columns} dataSource={subCategory} />;
};

export default SubCategoryStatus;
