import axios from 'axios'
import base from './main'


export function LoginReq(user_no, password, to) {
  let data = { user_no, password }
  let user = {}
  axios.post(base.login, data).then((res) => {
    if (res.data.status) {
      let data = res.data
      user.user_no = data.user
      user.reg_date = data.reg_date
      user.name = data.name
      user.phone = data.phone
      user.unit = data.unit
      user.jur = data.jur
      sessionStorage.setItem('sztu_doc_user', JSON.stringify(user))
      sessionStorage.setItem('sztu_doc_token', data.token)
      to()
    } else {
      alert('登录失败' + res.data.errmsg)
    }
  })
}


export function RegisterReq(user_no, password, name, phone, unit, to) {
  let data = { user_no, password, name, phone, unit }
  axios.post(base.reg_date, data).then((res) => {
    if (res.data.status) {
      alert('注册成功！')
      to()
    } else {
      alert('注册失败' + res.data.errmsg)
    }
  })
}