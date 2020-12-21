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
  let data = { user_no };
  axios
    .post(base.userDelete, data)
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

export function UserUpdate(user_no) {
  let data = { user_no };
  axios
    .post(base.userUpdate, data)
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
