var models = require('../models')
var express = require('express');
var router = express.Router();
var Op = models.Sequelize.Op


router.get('/GetList', async function (req, res, next) {
  if (req.user.jur == 3) {
    res.status(403).json({
      msg: "权限不足"
    })
  } else {
    let where = {}
    let User = []
    switch (req.user.jur) {
      case 0, 1:
        where = {}
        break;
      case 2:
        where = {
          unit: req.user.unit
        }
        break;
    }
    let UserList = await models.User.findAll({
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
  }

})

router.post('/Update', async function (req, res, next) {
  if (req.user.jur == 3) {
    res.status(403).json({
      errmsg: "权限不足"
    })
  }
  let data = req.body
  let user = await models.User.findOne({
    where: {
      user_no: req.body.user_no
    }
  })
  if (user) {
    await user.update({
      name: data.name,
      phone: data.phone,
      unit: data.unit,
    })
    if (req.user.jur == 0) {
      await user.update({
        jur: data.jur
      })
    }
    res.status(200).json({
      status: true,
      errmsg: ""
    })
  } else {
    res.status(400).json({
      errmsg: "用户不存在"
    })
  }
})

router.post('/Delete', async function (req, res, next) {
  if (req.user.jur >= 3) {
    res.status(403).json({
      status: false,
      errmsg: "权限不足 无法删除成员"
    })
  } else {
    let user = await models.User.findOne({
      where: {
        user_no: req.body.user_no
      }
    })
    if (req.user.jur <= 1) {
      await user.destroy()
      res.status.json({
        status: true,
        errmsg: ""
      })
    } else {
      if (req.user.unit = user.unit) {
        await user.destroy()
        res.status.json({
          status: true,
          errmsg: ""
        })
      } else {
        res.status(403).json({
          status: false,
          errmsg: "权限不足 无法删除其他部门成员"
        })
      }
    }
  }
})

router.post('/Query', async function (req, res, next) {
  if (req.user.jur == 0) {
    res.status(403).json({
      errmsg: "权限不足"
    })
  } else {
    let where = {}
    let data = req.body
    let User = []

    if (data.user_no) where.user_no = data.user_no
    if (data.name) where.name = data.name
    if (data.phone) where.phone = data.phone
    if (data.unit) where.unit = data.unit
    if (req.user.jur == 2 && data.unit) where.unit = req.user.unit


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
  }
})

module.exports = router;