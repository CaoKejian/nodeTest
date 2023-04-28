var express = require('express');
const UserModel = require('../model/UserModel');
const InfoModel = require('../model/InfoModel.js')
const ArticleModel = require('../model/ArticleModel')
const CityModel = require('../model/CityModel')
const SafetyModel = require('../model/SafetyModel')
const HotSearchModel = require('../model/HotSearch')
const ItemUsingModel = require('../model/ItemUsingModel')
const AdminUserModel = require('../model/AdminUserModel')
const AdminRoleModel = require('../model/AdminRoleModel')
const RoleModel = require('../model/RoleModel')
const ResourceModel = require('../model/ResourceModel')
const ProductModel = require('../model/ProductModel')
const axios = require('axios')
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ name: "123" });
});

router.post("/user/add", (req, res) => {
  console.log(req.body);
  const { username, password, age } = req.body
  UserModel.create({
    username,
    password,
    age
  }).then(data => {
    console.log("data:", data);
  })
  res.send({
    ok: 1,
    code: 200,
    data: ({
      username,
      password,
      age
    })
  })
})
router.post('/user/update/:id', (req, res) => {
  console.log(req.body);
  const { username, password, age } = req.body
  UserModel.updateOne({ _id: req.params.id }, {
    username,
    password,
    age
  }).then(data => {
    console.log("data:", data);
  })
  res.send({
    ok: 1
  })
})
router.get('/user/delete/:id', (req, res) => {
  UserModel.deleteOne({ _id: req.params.id }).then(data => {
    console.log(data);
  })
})

router.get('/user/list', async (req, res) => {
  const { username, pwd } = req.query
  const user = await UserModel.findOne({
    username
  })
  if (user) {
    if (user.password === pwd) {
      res.send({
        code: 200,
        message: "登录成功"
      })
    } else {
      res.send({
        code: 201,
        message: "密码错误"
      })
    }
  }
  if (!user) {
    res.send({
      code: 404,
      message: "没有该用户"
    })
  }
})

router.get('/info/list', (req, res) => {
  // {"id":7,"parentId":0,"createTime":"2023-2-6T11:39:20.000+00:00","title":"订单","level":0,"sort":0,"name":"oms","icon":"order","hidden":0},
  InfoModel.find().then(data => {
    res.send(data[0])
  })
})

router.get('/article/list', (req, res) => {
  ArticleModel.find().then(data => {
    res.send({
      code: 200,
      data
    })
  })
})
router.get('/city/list', (req, res) => {
  CityModel.find().then(data => {
    res.send({
      code: 200,
      data
    })
  })
})

router.get('/safety/info', (req, res) => {
  SafetyModel.find().then(data => {
    res.send(data[0])
  })
})

router.get('/hotSearch/list', (req, res) => {
  HotSearchModel.find().then(data => {
    res.send({
      data
    })
  })
})
router.get('/china/list', async (req, res) => {
  const result = await axios.get('https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=335033451023')
  res.json({
    ...result.data.data
  })
})

router.get('/itemUsing', async (req, res) => {
  const result = await ItemUsingModel.find()
  console.log(result);
  res.send({
    data: result
  })
})

router.post('/admin/role/:id', (req, res) => {
  const { createTime, email, username, status, password, note, nickName, loginTime } = req.body
  console.log(req.body);
  AdminRoleModel.updateOne({ id: req.params.id }, {
    createTime, email, username, status, password, note, nickName, loginTime
  }).then(data => {
    res.send(data)
  })
})

router.get('/admin/role', (req, res) => {
  AdminRoleModel.find().then(data => {
    res.send({
      data: data
    })
  })
})
router.get('/admin/role/:id', (req, res) => {
  console.log(req.params.id);
  AdminRoleModel.find({ id: req.params.id }).then(data => {
    res.send({
      data: data
    })
  })
})
router.get('/role/list', (req, res) => {
  RoleModel.find().then(data => {
    res.send({
      data: data
    })
  })
})

router.get('/admin/role/search/:username', (req, res) => {
  AdminRoleModel.find(
    { username: req.params.username }
  ).then(data => {
    res.send({
      data: data
    })
  })
})
router.get('/people/list', (req, res) => {
  ResourceModel.find().then(data => {
    res.send({
      data: data
    })
  })
})
router.post('/people/list/:number', (req, res) => {
  console.log(req.body);
  const { number, address, name, addData, content } = req.body
  ResourceModel.updateOne({ number: req.params.number }, {
    number, address, name, addData, content
  }).then(data => {
    res.send({
      data: data
    })
  })
})
router.get('/product/list', (req, res) => {
  ProductModel.find().then(data => {
    res.send({
      data: data
    })
  })
})
router.get('/product/list/:num', (req, res) => {
  ProductModel.deleteOne({
    num: req.params.num
  }).then(data => {
    res.send(data)
  })
})
router.post('/product/update/:num', (req, res) => {
  const { num, firstname, lastname, storage, integral } = req.body
  ProductModel.updateOne({
    num: req.params.num
  }, {
    num, firstname, lastname, storage, integral
  }).then(data => {
    res.send(data)
  })
})
router.get('/product/update/:lastname', (req, res) => {
  ProductModel.find({
    lastname: { '$regex': req.params.lastname }
  }).then(data => {
    res.send({ data: data })
  })
})
module.exports = router;
