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

const Login = () => {
  const [SubmitData, setSubmitData] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [spiner, setSpiner] = useState(false);
  let navigate = useNavigate();

  let handleSubmit = () => {
    setSpiner(true);
    async function submit() {
      let { data } = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        {
          email: SubmitData.email,
          password: SubmitData.password,
        }
      );

      if (data.error) {
        setError(data.error);
        setSpiner(false);
      }

      if (data.role == "member") {
        setError("Invalid Crediantial");
        setSpiner(false);
      } else {
        if (data.success) {
          setSuccess(data.success);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      }
    }

    submit();
  };

  let handleForm = (e) => {
    setSubmitData({ ...SubmitData, [e.target.name]: e.target.value });
    setError("");
  };

  let handleResetPassword = () => {
    async function reset() {
      let { data } = await axios.post(
        "http://localhost:8000/api/v1/auth/resetpassword ",
        {
          email: SubmitData.email,
        }
      );

      console.log(data);

      if (data.error) {
        setError(data.error);
      }

      if (data.success) {
        setSuccess(data.success);
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 3000);
      }
    }
    reset();
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
          title="Login Here"
          bordered={true}
          style={{
            width: 400,
            textAlign: "center",
          }}
        >
          {error ? <Alert message={error} type="error" /> : ""}
          {success ? <Alert message={success} type="success" /> : ""}
          <div style={{ marginTop: "20px" }}>
            <Form.Item label="Email">
              <Input onChange={handleForm} name="email" type="email" />
            </Form.Item>{" "}
            <Form.Item label="Password">
              <Input onChange={handleForm} name="password" type="password" />
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
            <Link to="/resetpasswordemail">
              <Alert
                onClick={handleResetPassword}
                style={{ marginBottom: "20px", cursor: "pointer" }}
                message="Forget Password !"
                type="warning"
              />
            </Link>
            <Link to="/registration">
              <Alert
                style={{ marginBottom: "20px", cursor: "pointer" }}
                message="Create Account !"
                type="warning"
              />
            </Link>
          </div>
        </Card>
      </Form>
    </>
  );
};
export default () => <Login />;
