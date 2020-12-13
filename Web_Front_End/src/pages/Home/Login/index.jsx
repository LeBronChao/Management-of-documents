import { NavLink } from "react-router-dom";
import { Form, Input } from "antd";
import "./index.css";

function Login(props) {
  const navToHome = function () {
    props.history.push("/Doc");
  };
  const formItemLayout = {
    wrapperCol: {
      sm: { offset: 3 },
    },
  };
  return (
    <div id="subBox">
      <div id="loginText">登录</div>
      <Form {...formItemLayout} layout="horizontal">
        <Form.Item
          name="account"
          rules={[
            {
              required: true,
              message: "请输入你的账号！",
            },
          ]}
        >
          <Input placeholder="账号" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "请输入你的密码！",
            },
          ]}
        >
          <Input placeholder="密码" />
        </Form.Item>
      </Form>
      <p id="fg_pw">忘记密码</p>
      <button id="loginBtn" onClick={navToHome}>
        登录
      </button>
      <p id="rigisterText">
        没有账号？
        <NavLink id="nl_rg" to="/Home/Register">
          立即注册
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
