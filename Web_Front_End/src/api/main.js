import axios from "axios";

const PROTOCOL = "http";
const ADDRESS = "39.106.96.41";
const PORT = 3001;

let baseUrl = PROTOCOL + "://" + ADDRESS + ":" + PORT;
axios.defaults.baseURL = baseUrl;

// axios的全局配置
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('sztu_doc_token')
axios.interceptors.request.use(
  (config) => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = sessionStorage.getItem("sztu_doc_token");
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let base = {
  login: "/User/Login",
  register: "/User/Register",
  docList: "/Doc/GetList",
  docClick: "/Doc/Click",
  docPub: "/Doc/Pub",
  docFile: "/Doc/File",
  detail: "/Doc/Get",
  exmList: "/Doc/ExmList",
  docExm: "/Doc/Exm",
  docDelete: "/Doc/Delete",
  userDelete: "/User/Delete",
  userList: "/User/GetList",
  UserUpdate: "/User/Update",
};

export default base;
