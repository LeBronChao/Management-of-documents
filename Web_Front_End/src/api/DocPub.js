import axios from 'axios'
import base from './main'


export async function DocPubReq(type, title, color, bold, text, text_html, unit, file, file_name, nav) {
  let file_path, houzhui
  let bool1, bool2, errmsg = ''

  if (file) {
    await axios.post(base.docFile, file, { headers: { 'Content-Type': 'multipart/form-data' } }).then((res) => {
      bool2 = res.data.status
      file_path = res.data.file_path
      houzhui = res.data.houzhui
    }).catch((e) => {
      console.log(e)
    })
  }

  let data = {
    color: color ? 1 : 0,
    bold: bold ? 1 : 0,
    type, title, text, text_html, unit, file_name, file_path, houzhui
  }

  await axios.post(base.docPub, data).then((res) => {
    bool1 = res.data.status
    errmsg += res.data.errmsg
  }).catch((e) => {
    console.log(e)
  })
  if (!file)
    bool2 = true
  if (bool1 && bool2) {
    nav()
    alert('发布成功！')
  } else {
    alert('发布失败' + errmsg)
  }
}