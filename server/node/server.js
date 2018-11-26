const express = require('express')
const mongoose = require('mongoose')

//链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})
//类似mysql的表，mongo里面有文档，字段的概念
const User = mongoose.model('simple_user', new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true}
}))


const app = express()
app.get('/', function (req, res) {
    res.send('<h1> Hello Simple</h1>')
})

app.get('/simple_user/add', function (req, res) {
    //新增数据
    User.create({
        name: 'SimpleZhang',
        age: 28
    }, function (err, doc) {
        if (!err) {
            console.log(doc)
        } else {
            console.log(err)
        }
    })
})

app.get('/simple_user/search', function (req, res) {
    //res.json({name: 'simple', age: 28, sex: 'male'})
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})

app.get('/simple_user/search_first', function (req, res) {
    //res.json({name: 'simple', age: 28, sex: 'male'})
    User.findOne({}, function (err, doc) {
        console.log(doc)
        return res.json(doc)
    })
})

app.get('/simple_user/delete', function (req, res) {
    User.remove({name: 'SimpleZhang'}, function (err, doc) {
        return res.send('<h1> Delete All Successfully</h1>')
    })
})


app.get('/simple_user/update', function (req, res) {
    User.update({'name': 'SimpleZhang'}, {'$set': {age:26}}, function (err, doc) {
        return res.send('<h1> Update Successfully</h1>')
    })
})


app.listen(9093, function () {
    console.log('Node app start at port 9093')
})