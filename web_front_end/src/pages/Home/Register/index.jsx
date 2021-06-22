import "./index.css";
import { Form, Input, Select } from "antd";
import { useState } from "react";
import { RegisterReq } from "../../../api/Home";
import { NavLink } from "react-router-dom";
import { SELECT_OPTIONS} from "../../../constant";


function Register(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [unit, setunit] = useState();
  const { Option } = Select;
  function nav() {
    props.history.push("/Home/Login");
  }
  const navToLogin = () => {
    RegisterReq(username, password, name, phoneNumber, unit, nav);
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
      default:
        break;
    }
  };
  return (
    <div id="subBox">
      <div id="registerText">注册</div>
      <Form layout="horizontal">
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "请输入你的工号或学号!",
            },
            {
              pattern: /^\d{5,12}$/,
              message: "请输入5-12位的数字",
            },
          ]}
        >
          <Input
            value={username}
            name="username"
            onChange={changeHandler}
            placeholder="工号/学号 （长度为5-12位，仅能使用数字）"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "请输入你的密码！",
            },
            {
              pattern: /^\w{8,16}$/,
              message: "请输入长度为8-16位的密码，仅能使用数字/字母/下划线",
            },
          ]}
        >
          <Input.Password
            value={password}
            name="password"
            onChange={changeHandler}
            placeholder="密码 （长度为8-16位，仅能使用数字/字母/下划线）"
          />
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
            {
              pattern: /^[\u4e00-\u9fa5]{2,10}$/,
              message: "请输入长度为2-10个中文字符的姓名！",
            },
          ]}
        >
          <Input
            value={name}
            name="name"
            onChange={changeHandler}
            placeholder="姓名 （中文真实姓名）"
          />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "请输入你的手机号码！",
            },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: "请输入正确的手机号码！",
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
          name="unit"
          rules={[
            {
              required: true,
              message: "请输入你的单位或学院！",
            },
          ]}
        >
          <Select
            name="unit"
            placeholder="单位/学院"
            onSelect={(value) => {
              setunit(value);
            }}
            value={unit}
          >
            {
              SELECT_OPTIONS.map((item)=>{
                return <Option value={item} key={item}>{item}</Option>
              })
            }
          </Select>
        </Form.Item>
      </Form>
      <button id="registerBtn" onClick={navToLogin}>
        注册
      </button>
      <p id="login_Text">
        已有账号？
        <NavLink id="nl_lg" to="/Home/Login">
          立即登陆
        </NavLink>
      </p>
    </div>
  );
}

export default Register;
