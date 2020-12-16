import axios from 'axios'

const PROTOCOL = 'http'
const ADDRESS = '10.118.21.172'
const PORT = 3001
let baseUrl = PROTOCOL + '://' + ADDRESS + ':' + PORT
axios.defaults.baseURL = baseUrl

// axios的全局配置
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('sztu_doc_token')
axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = sessionStorage.getItem('sztu_doc_token')
    config.headers.Authorization = token;
    return config;
  },
  error => {
    return Promise.reject(error);
  });


let base = {
  login: '/User/Login',
  register: '/User/Register',
  docList: '/Doc/GetList',
  docClick: '/Doc/Click',
  docPub: '/Doc/Pub',
  detail: '/Doc/Get'
}

export default base;

