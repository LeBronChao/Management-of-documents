import "./index.css";
import { Form, Input } from "antd";
import { useState } from "react";
function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");

  const formItemLayout = {
    wrapperCol: {
      sm: { offset: 3 },
    },
  };

  const navToLogin = () => {
    let registerData = [
      username,
      password,
      confirm,
      name,
      phoneNumber,
      department,
    ];
    console.log(registerData);
    props.history.push("/Home/Login");
  };

  const changeHandler = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirm":
        setConfirm(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "phoneNumber":
        setPhoneNumber(e.target.value);
        break;
      case "department":
        setDepartment(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div id="subBox">
      <div id="registerText">注册</div>
      <Form {...formItemLayout} layout="horizontal">
        <Form.Item
          rules={[
            {
              required: true,
              message: "请输入你的工号或学号！",
            },
          ]}
        >
          <Input
            value={username}
            name="username"
            onChange={changeHandler}
            placeholder="工号/学号"
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "请输入你的密码！",
            },
          ]}
        >
          <Input.Password
            value={password}
            name="password"
            onChange={changeHandler}
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "请确认你的密码！",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("你两次输入的密码不一致!");
              },
            }),
          ]}
        >
          <Input.Password
            value={confirm}
            name="confirm"
            onChange={changeHandler}
            placeholder="确认密码"
          />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "请输入你的姓名！",
            },
          ]}
        >
          <Input
            value={name}
            name="name"
            onChange={changeHandler}
            placeholder="姓名"
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "请输入你的手机号码！",
            },
          ]}
        >
          <Input
            value={phoneNumber}
            name="phoneNumber"
            onChange={changeHandler}
            placeholder="手机号码"
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "请输入你的单位或学院！",
            },
          ]}
        >
          <Input
            value={department}
            name="department"
            onChange={changeHandler}
            placeholder="单位/学院"
          />
        </Form.Item>
      </Form>
      <button id="registerBtn" onClick={navToLogin}>
        注册
      </button>
    </div>
  );
}

export default Register;
