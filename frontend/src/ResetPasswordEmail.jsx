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

const ResetPasswordEmail = () => {
  const [SubmitData, setSubmitData] = useState();


  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [spiner, setSpiner] = useState(false);

;

  let handleResetPassword = () => {
    setSpiner(true)
    async function reset() {
      let { data } = await axios.post(
        "http://localhost:8000/api/v1/auth/resetpassword ",
        {
          email: SubmitData,
        }
      );

      console.log(data);

      if (data.error) {
        setError(data.error);
        setSpiner(false)
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
          title="Give Your Email For Reset Password"
          bordered={true}
          style={{
            width: 400,
            textAlign: "center",
          }}
        >
          {error ? <Alert message={error} type="error" /> : ""}
          {success ? <Alert message={success} type="success" /> : ""}
          <div style={{ marginTop: "20px" }}>
            <Form.Item label="Enter Your Email">
              <Input onChange={handleForm} name="email" type="email" />
            </Form.Item>{" "}
            <Form.Item style={{ textAlign: "center" }}>
              {spiner ? (
                <Spin />
              ) : (
                <Button onClick={handleResetPassword} style={{ width: "350px" }}>
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
export default () => <ResetPasswordEmail />;
