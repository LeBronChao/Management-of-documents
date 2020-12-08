import axios from 'axios'

const PROTOCOL = 'http'
const ADDRESS = 'localhost'
const PORT = 3001

axios.defaults.baseURL = PROTOCOL + '://' + ADDRESS + ':' + PORT

// axios的全局配置
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

let baseUrl = PROTOCOL + '://' + ADDRESS + ':' + PORT
let base = {
  docList: '/Doc/GetList',
  docClick: ' /Doc/Click'
}

export default base;

