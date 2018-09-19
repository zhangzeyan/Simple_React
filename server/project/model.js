const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/simple_job'
mongoose.connect(DB_URL)

//类似mysql的表，mongo里面有文档，字段的概念
const User = mongoose.model('simple_job_user', new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true}
}))