import "./index.css";
import { Form, Input } from "antd";
function Register(props) {
  const formItemLayout = {
    wrapperCol: {
      sm: { offset: 3 },
    },
  };
  const navToLogin = () => {
    props.history.push("/Home/Login");
  };
  return (
    <div id="subBox">
      <div id="registerText">注册</div>
      <Form {...formItemLayout} layout="horizontal">
        <Form.Item
          name="id"
          rules={[
            {
              required: true,
              message: "请输入你的工号或学号！",
            },
          ]}
        >
          <Input placeholder="工号/学号" />
        </Form.Item>
        <Form.Item
          name="register_password"
          rules={[
            {
              required: true,
              message: "请输入你的密码！",
            },
          ]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>
        <Form.Item
          name="confirm"
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
          <Input.Password placeholder="确认密码" />
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
          <Input placeholder="姓名" />
        </Form.Item>
        <Form.Item
          name="phone_number"
          rules={[
            {
              required: true,
              message: "请输入你的手机号码！",
            },
          ]}
        >
          <Input placeholder="手机号码" />
        </Form.Item>
        <Form.Item
          name="department"
          rules={[
            {
              required: true,
              message: "请输入你的单位或学院！",
            },
          ]}
        >
          <Input placeholder="单位/学院" />
        </Form.Item>
      </Form>
      <button id="registerBtn" onClick={navToLogin}>
        注册
      </button>
    </div>
  );
}

export default Register;
