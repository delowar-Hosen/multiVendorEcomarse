import React, { useEffect, useState } from "react";
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
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Otp = () => {
  const [SubmitData, setSubmitData] = useState();

  const [searchParam, setSearchParam] = useSearchParams();

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [gmail, setGmail] = useState("");
  const [otp, setOtp] = useState("");
  const [spiner, setSpiner] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    let getValue = searchParam.get("email");
    let setValue = getValue.split("?");
    setGmail(setValue[0]);
    setOtp(setValue[1]);
  }, []);
  let handleSubmit = () => {
    setSpiner(true);
    async function submit() {
      let { data } = await axios.post(
        "http://localhost:8000/api/v1/auth/otpcheck",
        {
          email: gmail,
          otp: SubmitData,
        }
      );
      console.log(data.err);
      if (data.error) {
        setError(data.error);
        setSpiner(false);
      }

      if (data.success) {
        setSuccess(data.success);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    }

    submit();
  };

  let handleForm = (e) => {
    setSubmitData(e.target.value);
    setError("");
  };

  return (
    <>
      <Form
        labelCol={{
          span: 30,
        }}
        layout="vertical"
        style={{
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <Card
          title="Match Your Otp Code For Login"
          bordered={true}
          style={{
            width: 400,
            textAlign: "center",
          }}
        >
          {error ? <Alert message={error} type="error" /> : ""}
          {success ? <Alert message={success} type="success" /> : ""}
          <div style={{ marginTop: "20px" }}>
            <Form.Item label={`Enter Your Otp Code Is :${otp}`}>
              <Input onChange={handleForm} name="otp" type="text" />
            </Form.Item>{" "}
            <Form.Item style={{ textAlign: "center" }}>
              {spiner ? (
                <Spin />
              ) : (
                <Button onClick={handleSubmit} style={{ width: "350px" }}>
                  Submit
                </Button>
              )}
            </Form.Item>
          </div>
        </Card>
      </Form>
    </>
  );
};
export default () => <Otp />;
