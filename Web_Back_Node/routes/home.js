var models = require('../models')
var express = require('express');
var router = express.Router();
var Op = models.Sequelize.Op
var md5 = require('js-md5')
var jwt = require('jsonwebtoken')


router.post('/Login', async function (req, res, next) {

  let user = await models.User.findOne({
    where: {
      user_no: req.body.user_no
    }
  })
  if (!user) {
    res.status(400).json({
      status: false,
      errmsg: "用户不存在"
    })
  }
  else if (md5(req.body.password) != user.password) {
    res.status(400).json({
      status: false,
      errmsg: "密码错误"
    })
  } else {
    // 注意默认情况 Token 必须以 Bearer+空格 开头
    const token = 'Bearer ' + jwt.sign(
      {
        ...user
      },
      'secret12345',
      {
        expiresIn: 3600 * 3
      }
    )
    res.status(200).json({
      user_no: user.user_no,
      reg_date: user.createdAt,
      name: user.name,
      phone: user.phone,
      unit: user.unit,
      jur: user.jur,
      status: true,
      errmsg: "",
      token: token
    })
  }

})

router.post('/Register', async function (req, res, next) {
  let data = req.body
  let bool = false
  let errmsg = "请正确填写 "
  if (!/\d[5,12]/.test(data.user_no)) {
    bool = true
    errmsg += "工号/学号 "
  }
  if (!/\w[8,16]/.test(data.password)) {
    bool = true
    errmsg += "密码 "
  }
  if (!data.name) {
    bool = true
    errmsg += "姓名 "
  }
  if (!/^1[3-9]\d{9}$/.test(data.phone)) {
    bool = true
    errmsg += "手机号 "
  }
  if (!data.unit) {
    bool = true
    errmsg += "单位 "
  }

  if (bool) {
    res.status(400).json({
      status: false,
      errmsg: errmsg
    })
  } else {
    await models.User.create({
      user_no: data.user_no,
      password: md5(data.password),
      name: data.name,
      phone: data.phone,
      unit: data.unit,
      jur: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    res.status(200).json({
      status: true,
      errmsg: ""
    })
  }
})


module.exports = router;