import axios from 'axios'
import base from './main'


export function DocListReq(render, type) {
  let data = {
    type: type
  }
  axios.post(base.docList, data).then((res) => {
    render(res.data.doc_list)
  }).catch((e) => {
    console.log(e);
  })
}

export function DocClickReq(doc_no) {
  let data = {
    doc_no: doc_no
  }
  axios.post(base.docClick, data).then((res) => {
    if (res.data.status) {
      console.log('点击量+1')
    } else {
      alert(res.data.errmsg)
    }
  }).catch((e) => {
    console.log(e)
  })
}