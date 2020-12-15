var models = require('../models')
var express = require('express');
var router = express.Router();
var Op = models.Sequelize.Op


router.post('/GetList', async function (req, res, next) {
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
  let Doc_List = await models.Doc.findAll({
    where: where,
    include: [models.Doc_Title]
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
      doc_no: value.id
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
    exm_status: 1,
    pub_username: "LeBronChao",
    exm_username: "LeBronChao",
    createdAt: new Date(),
    updatedAt: new Date()
  })
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

router.get('/ExmList', async function (req, res, next) {
  let Doc_List = await models.Doc.findAll({
    where: {
      exm_status: 0
    },
    include: [models.Doc_Title]
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
      doc_no: value.id
    })
  })
  res.status(200).json({ Doc: Doc })
})

router.post('/Exm', async function (req, res, next) {
  let doc = await models.Doc.findOne({
    where: {
      doc_no: req.body.doc_no,
    }
  })
  doc.update({
    status: req.body.status
  })
  res.status(200).json({
    status: true,
    errmsg: ""
  })
})

module.exports = router;