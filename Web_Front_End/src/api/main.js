import axios from 'axios'

const PROTOCOL = 'http'
const ADDRESS = '10.118.21.172'
const PORT = 3001

axios.defaults.baseURL = PROTOCOL + '://' + ADDRESS + ':' + PORT

// axios的全局配置
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Authorization'] = sessionStorage.getItem("sztu_doc_token");

let baseUrl = PROTOCOL + '://' + ADDRESS + ':' + PORT
let base = {
  login: '/User/Login',
  register: '/User/Register',
  docList: '/Doc/GetList',
  docClick: '/Doc/Click',
  docPub: '/Doc/Pub',
  detail: '/Doc/Get'
}

export default base;

