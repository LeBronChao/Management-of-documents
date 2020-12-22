import { Table, Input, Select, Button } from "antd";
import { useState, useEffect } from "react";
import "./index.css";
import {
  UserDeleteReq,
  UserListReq,
  UnitQueryReq,
  NameQueryReq,
} from "../../../api/UserList";
import EditInfo from "../../../components/Doc/UserManage/EditInfo";
const { Option } = Select;
const { Search } = Input;

function UserManage(props) {
  let [loading, setLoading] = useState(true);
  let [user_list, setUserList] = useState([]);
  let [visible, setVisible] = useState(false);
  let [user_data, setUserData] = useState();

  const columns = [
    {
      title: "用户名",
      key: "user_no",
      dataIndex: "user_no",
      align: "center",
      width: "120px",
    },
    {
      title: "单位",
      key: "unit",
      dataIndex: "unit",
      align: "center",
      width: "210px",
    },
    {
      title: "姓名",
      key: "name",
      dataIndex: "name",
      align: "center",
      width: "80px",
    },
    {
      title: "手机号",
      key: "phone",
      dataIndex: "phone",
      align: "center",
      width: "120px",
    },
    {
      title: "权限",
      key: "jur",
      dataIndex: "jur",
      align: "center",
      render: (jur, record) => {
        let str_jur;
        switch (jur) {
          case 0:
            str_jur = "超级管理员";
            break;
          case 1:
            str_jur = "总管理员";
            break;
          case 2:
            str_jur = "部门管理员";
            break;
          case 3:
            str_jur = "普通用户";
            break;
          default:
            break;
        }

        return str_jur;
      },
    },
    {
      title: "注册时间",
      key: "reg_date",
      dataIndex: "reg_date",
      align: "center",
      width: "200px",
      render: (reg_date) => {
        let time = new Date(reg_date);
        let date =
          time.getFullYear() +
          "-" +
          parseInt(time.getMonth() + 1) +
          "-" +
          parseInt(time.getDate()) +
          "    " +
          time.getHours() +
          ":" +
          time.getMinutes() +
          ":" +
          time.getSeconds();
        return <i>{date}</i>;
      },
    },
    {
      title: "操作",
      key: "action",
      align: "center",
      render: (target, record) => {
        return (
          <div>
            <Button
              style={{ color: "#1890ff", borderColor: "#1890ff" }}
              onClick={() => {
                setVisible(true);
                setUserData(record);
              }}
            >
              编辑
            </Button>{" "}
            <Button
              danger
              onClick={() => {
                UserDeleteReq(target.user_no);
                UserListReq(UserListRender);
              }}
            >
              删除
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    UserListReq(UserListRender);
    return () => {
      UserListReq(UserListRender);
    };
  }, []);

  function SearchUser(userName) {
    NameQueryReq(UserListRender, userName);
  }

  function UserListRender(list) {
    console.log(list);
    setUserList(list);
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
          placeholder="按部门筛选"
          onSelect={(unit) => {
            UnitQueryReq(UserListRender, unit);
          }}
          style={{ width: "200px", marginLeft: "50px" }}
        >
          <Option value="大数据与互联网学院" key="0">
            大数据与互联网学院
          </Option>
          <Option value="中德智能制造学院" key="1">
            中德智能制造学院
          </Option>
          <Option value="创意与设计学院" key="2">
            创意与设计学院
          </Option>
          <Option value="健康与环境工程学院" key="3">
            健康与环境工程学院
          </Option>
          <Option value="新能源与新材料学院" key="4">
            新能源与新材料学院
          </Option>
          <Option value="城市交通与物流学院" key="5">
            城市交通与物流学院
          </Option>
          <Option value="商学院" key="6">
            商学院
          </Option>
          <Option value="药学院" key="7">
            药学院
          </Option>
          <Option value="体育与艺术学院" key="8">
            体育与艺术学院
          </Option>
          <Option value="质量与标准学院" key="9">
            质量与标准学院
          </Option>
          <Option value="工程物理学院" key="10">
            工程物理学院
          </Option>
          <Option value="研究生院" key="11">
            研究生院
          </Option>
          <Option value="党委组织部" key="12">
            党委组织部
          </Option>
          <Option value="党委宣传部" key="13">
            党委宣传部
          </Option>
          <Option value="党政办公室" key="14">
            党政办公室
          </Option>
          <Option value="科研与校企合作部" key="15">
            科研与校企合作部
          </Option>
          <Option value="国际合作与学生工作部" key="16">
            国际合作与学生工作部
          </Option>
          <Option value="采购与招投标管理中心" key="17">
            采购与招投标管理中心
          </Option>
          <Option value="信息中心" key="18">
            信息中心
          </Option>
          <Option value="校医院" key="19">
            校医院
          </Option>
          <Option value="创业创客与就业指导中心" key="20">
            创业创客与就业指导中心
          </Option>
          <Option value="国有资产与实验室管理部" key="21">
            国有资产与实验室管理部
          </Option>
          <Option value="教务部" key="22">
            教务部
          </Option>
          <Option value="计划财务部" key="23">
            计划财务部
          </Option>
          <Option value="图书馆" key="24">
            图书馆
          </Option>
          <Option value="安全保卫中心" key="25">
            安全保卫中心
          </Option>
          <Option value="后勤保障部" key="26">
            后勤保障部
          </Option>
          <Option value="校团委" key="27">
            校团委
          </Option>
        </Select>
        <main className="userlist-body">
          <Table
            dataSource={user_list}
            columns={columns}
            loading={loading}
            pagination={{ pageSize: 12 }}
            rowKey={(columns) => columns.user_no}
          />
        </main>
        <EditInfo
          style={{ position: "absolute" }}
          visible={visible}
          changeVisible={(visible) => setVisible(visible)}
          userData={user_data}
          reflash={() => {
            window.location.reload();
          }}
        />
      </div>
    </div>
  );
}

export default UserManage;
