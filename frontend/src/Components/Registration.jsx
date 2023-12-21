import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import {
  Spin,
  Card,
  Alert,
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  console.log(e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Registration = () => {
  const [SubmitData, setSubmitData] = useState({
    fullName: "",
    email: "",
    password: "",
    upload:""
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [spiner, setSpiner] = useState(false);
  let navigate = useNavigate();

  let handleSubmit = () => {
    setSpiner(true);
    async function submit() {
      let { data } = await axios.post(
        "http://localhost:8000/api/v1/auth/registration",
        {
          fullName: SubmitData.fullName,
          email: SubmitData.email,
          password: SubmitData.password,
          upload:SubmitData.upload
        }
      );

      if (data.error) {
        setError(data.error);
        setSpiner(false);
      }

      if (data.success) {
        setSuccess(data.success);
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 3000);
      }
    }

    submit();
  };

  let handleForm = (e) => {
    setSubmitData({ ...SubmitData, [e.target.name]: e.target.value });
    setError("");
  };

  return (
    <>
      <Form
        labelCol={{
          span: 8,
        }}
        layout="vertical"
        style={{
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <Card
          title="Registration"
          bordered={true}
          style={{
            width: 400,
            textAlign: "center",
          }}
        >
          {error ? <Alert message={error} type="error" /> : ""}
          {success ? <Alert message={success} type="success" /> : ""}
          <div style={{ marginTop: "20px" }}>
            <Form.Item label="Full Name">
              <Input onChange={handleForm} name="fullName" />
            </Form.Item>{" "}
            <Form.Item label="Email">
              <Input onChange={handleForm} name="email" type="email" />
            </Form.Item>{" "}
            <Form.Item label="Password">
              <Input onChange={handleForm} name="password" type="password" />
            </Form.Item>{" "}
            <Form.Item label="Upload Your Url">
              <Input onChange={handleForm} name="upload" type="text" />
            </Form.Item>
            <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  ></div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              {spiner ? (
                <Spin />
              ) : (
                <Button onClick={handleSubmit} style={{ width: "350px" }}>
                  Submit
                </Button>
              )}
            </Form.Item>
            <Link to="/login">
              <Button onClick={handleSubmit} style={{ width: "350px" }}>
                Alread have An Account
              </Button>
            </Link>
          </div>
        </Card>
      </Form>
    </>
  );
};
export default () => <Registration />;
