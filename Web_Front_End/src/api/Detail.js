import axios from 'axios'
import base from './main'

export function DocDetailReq(doc_no, render) {
  let data = {
    doc_no
  }
  axios.post(base.detail, data).then((res) => {
    let time = new Date(res.data.pub_time)
    console.log(time instanceof Date)
    let date = time.getFullYear() + '-' + parseInt(time.getMonth() + 1) + '-' + parseInt(time.getDate()) + "    " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
    res.data.pub_time = date
    res.data.date = time.getFullYear() + '年' + parseInt(time.getMonth() + 1) + '月' + parseInt(time.getDate()) + '日'
    render(res.data)
  }).catch((e) => {
    console.log(e)
  })
}