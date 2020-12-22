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
  axios
    .post(base.userDelete, user_no)
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

export function UserUpdate(user_no) {
  axios
    .post(base.userUpdate, user_no)
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
