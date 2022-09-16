import * as React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function NormalLoginForm() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    if (values.username === "testedev" && values.password === "12345678") {
      navigate("/home");
    }
  };

  return (
    <>
      <div className="login-title">
        <h1>Login</h1>
      </div>

      <div className="login-wrapper">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

// export default NormalLoginForm;
