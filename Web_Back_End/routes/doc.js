var models = require('../models')
var express = require('express');
var router = express.Router();
var Op = models.Sequelize.Op
var multer = require('multer');
var upload = multer({ dest: '../public/doc_files' }) // 文件储存路径
var fs = require('fs')
var pathLib = require('path')

let ip = "http://39.106.96.41:3001/"
//let ip = "http://39.106.96.14:3001/"

router.post('/GetList', async function (req, res, next) {
  let where = {
    exm_status: 1
  }
  if (req.body.type != '全部信息') {
    where.type = {
      [Op.like]: "%" + req.body.type + "%"
    }
  }
  if (req.body.title) {
    where.title = {
      [Op.like]: "%" + req.body.title + "%"
    }
  }
  let Doc_List = await models.Doc.findAll({
    where: where,
    include: [models.Doc_Title],
    order: [['id', 'DESC']]
  })
  let Doc = []
  Doc_List.forEach((value) => {
    let title_value = value.dataValues.Doc_Title
    value = value.dataValues
    Doc.push({
      type: value.type,
      unit: value.unit,
      title: value.title,
      date: value.pub_time,
      color: title_value.color,
      bold: title_value.bold,
      file: value.file_url ? true : false,
      doc_no: value.id,
      file_name: value.file_name
    })
  })
  res.status(200).json({ Doc: Doc })
})

router.post('/Pub', async function (req, res, next) {


  let data = req.body
  let index = models.Doc.findOne()
  if (!index)
    index.id = 0
  let doc = await models.Doc.create({
    id: index.id + 1,
    type: data.type,
    unit: data.unit,
    text: data.text,
    title: data.title,
    text_html: data.text_html,
    pub_time: new Date(),
    click_count: 0,
    file_url: "",
    file_name: data.file_name,
    exm_status: 0,
    pub_username: "LeBronChao",
    exm_username: "LeBronChao",
    createdAt: new Date(),
    updatedAt: new Date()
  })
  if (data.file_path) {
    let filename = "public/doc_files/" + doc.id + "_" + data.file_name
    fs.rename(data.file_path, filename, function (err) {
      if (err) {
        res.json({ status: false, errmsg: "发布失败" })
        doc.destory()
        return
      } else {
        doc.update({ file_url: ip + filename })
      }
    })
  }
  await models.Doc_Title.create({
    id: index.id + 1,
    DocId: doc.id,
    title: data.title,
    color: data.color,
    bold: data.bold,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  res.status(200).json({
    status: true,
    errmsg: ""
  })
})

router.post('/File', upload.single('avatar'), async function (req, res, next) {
  // 上传的文件在req.files中
  const filename = req.files[0].path + pathLib.parse(req.files[0].originalname).ext
  console.log(filename);
  fs.rename(req.files[0].path, filename, function (err) {
    if (err) {
      res.json({ status: false })
    } else {
      res.json({ status: true, file_path: filename, houzhui: pathLib.parse(req.files[0].originalname).ext })
    }
  })
})

router.post('/Click', async function (req, res, next) {
  let doc = await models.Doc.findByPk(req.body.doc_no)
  doc.update({
    click_count: doc.click_count + 1
  })
  res.status(200).json({
    status: true,
    errmsg: ''
  })
})

router.post('/Get', async function (req, res, next) {
  let doc = await models.Doc.findByPk(req.body.doc_no)
  res.status(200).json(doc)
})

router.post('/ExmList', async function (req, res, next) {
  let where = {}
  if (req.body.type != '全部信息') {
    where.type = {
      [Op.like]: "%" + req.body.type + "%"
    }
  }
  if (req.body.title) {
    where.title = {
      [Op.like]: "%" + req.body.title + "%"
    }
  }
  if (req.user.jur == 2) {
    where.unit = req.user.unit
  }
  let Doc_List = await models.Doc.findAll({
    where: where,
    include: [models.Doc_Title],
    order: [['id', 'DESC']]
  })
  let Doc = []
  Doc_List.forEach((value) => {
    let title_value = value.dataValues.Doc_Title
    value = value.dataValues
    Doc.push({
      type: value.type,
      unit: value.unit,
      title: value.title,
      date: value.pub_time,
      color: title_value.color,
      bold: title_value.bold,
      doc_no: value.id,
      status: value.exm_status
    })
  })
  res.status(200).json({ Doc: Doc })
})

router.post('/Exm', async function (req, res, next) {
  if (req.user.jur >= 2) {
    res.status(403).json({
      status: false,
      errmsg: "权限不足",
    })
  }
  try {
    let doc = await models.Doc.findByPk(req.body.doc_no)
    doc.update({
      exm_status: req.body.status
    })
    res.status(200).json({
      status: true,
      errmsg: ""
    })
  } catch (e) {
    res.status(500).json({
      status: false,
      errmsg: "操作失败"
    })
  }
})

router.post('/Delete', async function (req, res, next) {
  if (req.user.jur == 3)
    res.status(403).json({
      status: false,
      errmsg: "权限不足",
    })
  try {
    let doc = await models.Doc.findByPk(req.body.doc_no)
    let doc_title = await models.Doc_Title.findOne({
      where: {
        DocId: req.body.doc_no
      }
    })
    if (doc.file_url) {
      let filename = doc.file_url.slice(26)
      fs.unlink(filename, function (err) {
        if (err) {
          res.status(500).json({
            status: false,
            errmsg: "操作失败"
          })
        }
      })
    }
    await doc.destroy()
    await doc_title.destroy()
    res.status(200).json({
      status: true,
      errmsg: ""
    })
  } catch (e) {
    res.status(500).json({
      status: false,
      errmsg: "操作失败"
    })
  }


})


module.exports = router;