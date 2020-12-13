import axios from 'axios'
import base from './main'


export function DocPubReq(type, title, color, bold, text, text_html, unit, init) {
  let data = {
    color: color ? 1 : 0,
    bold: bold ? 1 : 0,
    type, title, text, text_html, unit
  }
  axios.post(base.docPub, data).then((res) => {
    if (res.data.status) {
      init()
      init()
      alert('发布成功！')
    } else {
      alert('发布失败' + res.data.errmsg)
    }
  }).catch((e) => {
    console.log(e)
  })
}