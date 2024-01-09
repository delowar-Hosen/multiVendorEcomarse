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

const AddSubCategory = () => {
  const [store, setStore] = useState([]);
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState("");

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    console.log(newEditorState);
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
    let data = await axios.post(
      "http://localhost:8000/api/v1/category/createsubcategory",
      {
        name: name,
        description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      }
    );

    console.log(data);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginTop: "10px", marginBottom: "10x" }}>
        <h5 className=" mb-2">SubCategory Name :</h5>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name Here"
        />
      </div>
      <div style={{ marginTop: "10px", marginBottom: "10x" }}>
        <h5 className=" mb-2">SubCategory Description :</h5>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
        />
      </div>

      <Button
        onClick={handleProduct}
        style={{ marginTop: "40px" }}
        type="primary"
        block
      >
        Sub Category Upload
      </Button>
    </div>
  );
};

export default AddSubCategory;
