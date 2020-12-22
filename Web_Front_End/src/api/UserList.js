import axios from "axios";
import base from "./main";

export function UserListReq(render) {
  axios
    .get(base.userList)
    .then((res) => {
      render(res.data.User);
    })
    .catch((e) => {
      console.log(e);
    });
}
export function UserDeleteReq(user_no) {
  let data = { user_no: user_no };
  axios
    .post(base.userDelete, data)
    .then((res) => {
      if (res.data.status) {
        alert("操作成功！");
      } else {
        alert(res.data.errmsg);
      }
    })
    .catch((e) => {
      alert("操作失败！");
      console.log(e);
    });
}

export function UserUpdateReq(user_data) {
  axios
    .post(base.userUpdate, user_data)
    .then((res) => {
      if (res.data.status) {
        alert("操作成功！");
      }
    })
    .catch((e) => {
      alert("操作失败！");
      console.log(e);
    });
}

export function UnitQueryReq(render, unit) {
  let data = { unit: unit };
  axios
    .post(base.userQuery, data)
    .then((res) => {
      render(res.data.User);
    })
    .catch((e) => {
      console.log(e);
    });
}

export function NameQueryReq(render, name) {
  let data = { name: name };
  axios
    .post(base.userQuery, data)
    .then((res) => {
      alert("操作成功！");
      render(res.data.User);
    })
    .catch((e) => {
      console.log(e);
    });
}
