import "./index.css";
import { Form, Input, Select } from "antd";
import { useState } from "react";
import { RegisterReq } from "../../../api/Home";
import { NavLink } from "react-router-dom";

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
            <Option value="大数据与互联网学院">大数据与互联网学院</Option>
            <Option value="中德智能制造学院">中德智能制造学院</Option>
            <Option value="创意与设计学院">创意与设计学院</Option>
            <Option value="健康与环境工程学院">健康与环境工程学院</Option>
            <Option value="新能源与新材料学院">新能源与新材料学院</Option>
            <Option value="城市交通与物流学院">城市交通与物流学院</Option>
            <Option value="商学院">商学院</Option>
            <Option value="药学院">药学院</Option>
            <Option value="体育与艺术学院">体育与艺术学院</Option>
            <Option value="质量与标准学院">质量与标准学院</Option>
            <Option value="工程物理学院">工程物理学院</Option>
            <Option value="研究生院">研究生院</Option>
            <Option value="党委组织部">党委组织部</Option>
            <Option value="党委宣传部">党委宣传部</Option>
            <Option value="党政办公室">党政办公室</Option>
            <Option value="科研与校企合作部">科研与校企合作部</Option>
            <Option value="国际合作与学生工作部">国际合作与学生工作部</Option>
            <Option value="采购与招投标管理中心">采购与招投标管理中心</Option>
            <Option value="信息中心">信息中心</Option>
            <Option value="校医院">校医院</Option>
            <Option value="创业创客与就业指导中心">
              创业创客与就业指导中心
            </Option>
            <Option value="国有资产与实验室管理部">
              国有资产与实验室管理部
            </Option>
            <Option value="教务部">教务部</Option>
            <Option value="计划财务部">计划财务部</Option>
            <Option value="图书馆">图书馆</Option>
            <Option value="安全保卫中心">安全保卫中心</Option>
            <Option value="后勤保障部">后勤保障部</Option>
            <Option value="校团委">校团委</Option>
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
