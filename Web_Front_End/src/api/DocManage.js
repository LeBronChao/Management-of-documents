import axios from 'axios'
import base from './main'


export function ExmListReq(render, type, title = "") {
  let data = {
    type: type,
    title: title
  }
  axios.post(base.exmList, data).then((res) => {
    render(res.data.Doc)
  }).catch((e) => {
    console.log(e);
  })
}

export function DocExmReq(doc_no, status, nav) {
  let data = { doc_no, status }
  axios.post(base.docExm, data).then((res) => {
    if (res.data.status) {
      alert('操作成功！')
      nav()
    }
  }).catch((e) => {
    console.log(e);
  })
}

export function DocDeleteReq(doc_no, nav) {
  let data = { doc_no }
  axios.post(base.docDelete, data).then((res) => {
    if (res.data.status) {
      alert('操作成功！')
      nav()
    }
  }).catch((e) => {
    console.log(e);
  })
}