import { Table, Input, Menu, Dropdown, Select, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import "./index.css";
const { Option } = Select;
const { Search } = Input;

function UserManage(props) {
  let [loading, setLoading] = useState(false);
  let [user_list, setUserList] = useState([
    {
      key: "1",
      user_no: "20183220114",
      unit: "大数据与互联网学院",
      name: "谢森豪",
      phone: "13380938170",
      jur: "超级管理员",
    },
    {
      key: "2",
      user_no: "20183220115",
      unit: "大数据与互联网学院",
      name: "李文豪",
      phone: "18923147537",
      jur: "普通用户",
    },
  ]);
  const jur_menu = (
    <Menu>
      <Menu.Item key="0">超级管理员</Menu.Item>
      <Menu.Item key="1">总管理员</Menu.Item>
      <Menu.Item key="2">部门用户</Menu.Item>
      <Menu.Item key="3">普通用户</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "用户名",
      dataIndex: "user_no",
      key: "user_no",
    },
    {
      title: "单位",
      dataIndex: "unit",
      key: "unit",
      render: (unit) => (
        <Select name="unit" placeholder={unit} value={unit}>
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
          <Option value="创业创客与就业指导中心">创业创客与就业指导中心</Option>
          <Option value="国有资产与实验室管理部">国有资产与实验室管理部</Option>
          <Option value="教务部">教务部</Option>
          <Option value="计划财务部">计划财务部</Option>
          <Option value="图书馆">图书馆</Option>
          <Option value="安全保卫中心">安全保卫中心</Option>
          <Option value="后勤保障部<">后勤保障部</Option>
          <Option value="校团委">校团委</Option>
        </Select>
      ),
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (name) => <Input value={name} bordered={false} />,
    },
    {
      title: "手机号",
      key: "phone",
      dataIndex: "phone",
      render: (phone) => <Input value={phone} bordered={false} />,
    },
    {
      title: "权限",
      key: "jur",
      dataIndex: "jur",
      render: (jur) => (
        <Dropdown overlay={jur_menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            {jur} <DownOutlined />
          </a>
        </Dropdown>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: () => <Button type="primary">删除</Button>,
    },
  ];

  function SearchUser(userName) {
    console.log(userName);
  }
  return (
    <div className="sp" style={{ width: "1440px" }}>
      <div className="doclist-container">
        <Search
          placeholder="输入姓名搜索"
          allowClear
          onSearch={SearchUser}
          style={{ width: "360px" }}
        />
        <Select
          name="unit"
          placeholder="按单位筛选"
          style={{ width: "200px", marginLeft: "50px" }}
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
          <Option value="创业创客与就业指导中心">创业创客与就业指导中心</Option>
          <Option value="国有资产与实验室管理部">国有资产与实验室管理部</Option>
          <Option value="教务部">教务部</Option>
          <Option value="计划财务部">计划财务部</Option>
          <Option value="图书馆">图书馆</Option>
          <Option value="安全保卫中心">安全保卫中心</Option>
          <Option value="后勤保障部<">后勤保障部</Option>
          <Option value="校团委">校团委</Option>
        </Select>
        <main className="userlist-body">
          <Table
            dataSource={user_list}
            columns={columns}
            loading={loading}
            pagination={{ pageSize: 12 }}
          />
        </main>
      </div>
    </div>
  );
}

export default UserManage;
