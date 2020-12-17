import { NavLink } from "react-router-dom";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";
import { useState } from "react";
import { LoginReq } from '../../../api/Home'

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function nav() {
    props.history.push("/Doc")
  }
  const navToHome = function () {
    LoginReq(username, password, nav)
  };
  const formItemLayout = {
    wrapperCol: {
      sm: { offset: 3 },
    },
  };
  const changeHandler = (e) => {
    e.target.name === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };
  return (
    <div id="subBox">
      <div id="loginText">登录</div>
      <Form {...formItemLayout} layout="horizontal">
        <Form.Item
          rules={[
            {
              required: true,
              message: "请输入你的账号！",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="账号"
            value={username}
            name="username"
            onChange={changeHandler}
            size="large"
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
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={changeHandler}
            size="large"
          />
        </Form.Item>
        <button id="loginBtn" onClick={navToHome}>
          登录
        </button>
      </Form>
      <p id="rigister_Text">
        没有账号？
        <NavLink id="nl_rg" to="/Home/Register">
          立即注册
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
