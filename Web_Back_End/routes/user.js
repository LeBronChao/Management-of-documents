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
    return
  }
  else if (md5(req.body.password) != user.password) {
    res.status(400).json({
      status: false,
      errmsg: "密码错误"
    })
    return
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
    return
  }

})

router.post('/Register', async function (req, res, next) {
  let data = req.body
  let bool = false
  let errmsg = "请正确填写 "
  if (!/^\d{5,12}$/.test(data.user_no)) {
    bool = true
    errmsg += "工号/学号 "
  }
  if (!/^\w{8,16}$/.test(data.password)) {
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
    return
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
    return
  }
})

router.get('/GetList', async function (req, res, next) {
  if (req.user.dataValues.jur == 3) {
    res.status(403).json({
      msg: "权限不足"
    })
    return
  } else {
    let where = {}
    let User = []
    switch (req.user.dataValues.jur) {
      case 0, 1:
        where = {}
        break;
      case 2:
        where = {
          unit: req.user.dataValues.unit
        }
        break;
    }
    where.jur = {
      [Op.gte]: req.user.dataValues.jur
    }
    let UserList = await models.User.findAll({
      where
    })
    UserList.forEach(value => {
      User.push({
        user_no: value.user_no,
        reg_date: value.createdAt,
        name: value.name,
        phone: value.phone,
        unit: value.unit,
        jur: value.jur
      })
    })
    res.status(200).json({
      User: User
    })
    return
  }

})

router.post('/Update', async function (req, res, next) {
  if (req.user.dataValues.jur == 3) {
    res.status(403).json({
      errmsg: "权限不足"
    })
    return
  }
  let data = req.body
  let user = await models.User.findOne({
    where: {
      user_no: req.body.user_no,
      jur: {
        [Op.gte]: req.user.dataValues.jur
      }
    }
  })
  if (user) {
    await user.update({
      name: data.name,
      phone: data.phone,
      unit: data.unit,
      jur: data.jur,
    })
    if (data.password) {
      await user.update({
        password: md5(data.password)
      })
    }
    res.status(200).json({
      status: true,
      errmsg: ""
    })
    return
  } else {
    res.status(400).json({
      errmsg: "用户不存在"
    })
    return
  }
})

router.post('/Delete', async function (req, res, next) {
  if (req.user.dataValues.jur >= 3) {
    res.status(403).json({
      status: false,
      errmsg: "权限不足 无法删除成员"
    })
    return
  } else {
    let user = await models.User.findOne({
      where: {
        user_no: req.body.user_no,
        jur: {
          [Op.gte]: req.user.dataValues.jur
        }
      }
    })
    if (req.user.dataValues.jur <= 1) {
      await user.destroy()
      res.status.json({
        status: true,
        errmsg: ""
      })
    } else {
      if (req.user.dataValues.unit = user.unit) {
        await user.destroy()
        res.status.json({
          status: true,
          errmsg: ""
        })
        return
      } else {
        res.status(403).json({
          status: false,
          errmsg: "权限不足 无法删除其他部门成员"
        })
        return
      }
    }
  }
})

router.post('/Query', async function (req, res, next) {
  if (req.user.dataValues.jur == 3) {
    res.status(403).json({
      errmsg: "权限不足"
    })
    return
  } else {
    let where = {}
    let data = req.body
    let User = []
    where.jur = {
      [Op.gte]: req.user.dataValues.jur
    }
    if (data.user_no) where.user_no = {
      [Op.like]: '%' + data.user_no + '%'
    }
    if (data.name) where.name = {
      [Op.like]: '%' + data.name + '%'
    }
    if (data.phone) where.phone = {
      [Op.like]: '%' + data.phone + '%'
    }
    if (data.unit) where.unit = {
      [Op.eq]: '%' + data.unit + '%'
    }
    if (req.user.jur == 2) where.unit = {
      [Op.eq]: '%' + req.user.dataValues.unit + '%'
    }


    let UserList = models.User.findAll({
      where
    })
    UserList.forEach(value => {
      User.push({
        user_no: value.user_no,
        reg_date: value.createAt,
        name: value.name,
        phone: value.phone,
        unit: value.unit,
        jur: value.unit
      })
    })
    res.status(200).json({
      User: User
    })
    return
  }
})

module.exports = router;