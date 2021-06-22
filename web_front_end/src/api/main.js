import axios from "axios";

const PROTOCOL = "https";
// const ADDRESS = "39.106.96.41";
const ADDRESS="docsback-1g00m41c717f8e91-1304295623.ap-shanghai.app.tcloudbase.com"
//const ADDRESS = "localhost";
const PORT = 8080;

let baseUrl = PROTOCOL + "://" + ADDRESS
axios.defaults.baseURL = baseUrl
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
axios.interceptors.response.use(
    (res) => {
        return res
    },
    (error) => {
        if (error.response.status === 401) {
            alert('登录超时，请重新登陆')
            window.location.href = '/Home/Login'
        }
        return Promise.reject(error)
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
    userUpdate: "/User/Update",
    userQuery: "/User/Query",
};

export default base;
