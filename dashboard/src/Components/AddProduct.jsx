import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Select, Button } from "antd";
import axios from "axios";

const options = [
  {
    value: "gold",
  },
  {
    value: "lime",
  },
  {
    value: "green",
  },
  {
    value: "cyan",
  },
];

const Product = () => {
  const [store, setStore] = useState([]);
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState("");

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  useEffect(() => {
    async function getData() {
      let { data } = await axios.get(
        "http://localhost:8000/api/v1/merchant/getstore"
      );

      let arr = [];
      data.map((Item) => {
        arr.push({
          value: Item._id,
          label: Item.storeName,
        });
      });
      setStore(arr);
    }

    getData();
  }, []);

  let handleProduct = async () => {
    await axios.post(
      "http://localhost:8000/api/v1/product/createproduct",
      {
        name: name,
        description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        store: storeName,
      }
    );
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginTop: "10px", marginBottom: "10x" }}>
        <h5 className=" mb-2">Product Name :</h5>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name Here"
        />
      </div>
      <div style={{ marginTop: "10px", marginBottom: "10x" }}>
        <h5 className=" mb-2">Product Description :</h5>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <div style={{ marginTop: "10px", marginBottom: "10x" }}>
        <h5 className=" mb-2">Product Varient :</h5>
        <Select
          mode="multiple"
          style={{
            width: "100%",
          }}
          options={options}
        />
      </div>
      <div style={{ marginTop: "10px", marginBottom: "10x" }}>
        <h5 className=" mb-2">Product Store Name :</h5>
        <Select
          onChange={(e) => setStoreName(e)}
          mode="single"
          style={{
            width: "100%",
          }}
          options={store}
        />
      </div>
      <Button className="bg-[#46AAF1] text-[#000]  mt-10" onClick={handleProduct} block>
        Product Upload
      </Button>
    </div>
  );
};

export default Product;
