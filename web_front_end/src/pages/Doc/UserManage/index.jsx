import { Table, Input, Select, Button } from "antd";
import { useState, useEffect } from "react";
import "./index.css";
import {
  UserDeleteReq,
  UserListReq,
  UserQueryReq,
} from "../../../api/UserList";
import EditInfo from "../../../components/Doc/UserManage/EditInfo";
import {SELECT_OPTIONS} from "../../../constant";
const { Option } = Select;
const { Search } = Input;

function UserManage(props) {
  let [loading, setLoading] = useState(true);
  let [user_list, setUserList] = useState([]);
  let [visible, setVisible] = useState(false);
  let [user_data, setUserData] = useState({
    user_no: "",
    jur: "",
    name: "",
    phone: "",
    unit: "",
  });
  let [unit, setUnit] = useState();
  let [userName, setUserName] = useState();

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
      width: "100px",
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
                setTimeout(() => {
                  setVisible(true);
                  setUserData(record);
                }, 0);
              }}
            >
              编辑
            </Button>{" "}
            <Button
              danger
              onClick={() => {
                UserDeleteReq(target.user_no);
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

  useEffect(() => {
    UserQueryReq(UserListRender, unit, userName);
  }, [unit, userName]);

  function UserListRender(list) {
    console.log(list);
    setTimeout(() => {
      setUserList(list);
      setLoading(false);
    }, 500);
  }

  return (
    <div className="sp" style={{ width: "1440px" }}>
      <div className="doclist-container">
        <Search
          placeholder="输入姓名搜索"
          allowClear
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          style={{ width: "360px" }}
        />
        <Select
          name="unit"
          placeholder="按部门筛选"
          allowClear="true"
          value={unit}
          onChange={(value) => {
            setUnit(value);
          }}
          style={{ width: "200px", marginLeft: "50px" }}
        >
          {
            SELECT_OPTIONS.map((item)=>{
              return <Option value={item} key={item}>{item}</Option>
            })
          }
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
        />
      </div>
    </div>
  );
}

export default UserManage;
