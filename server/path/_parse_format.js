const {parse,format} = require('path')

const filePath = '/user/local/node_modules/n/package.json'

const result = parse(filePath)
console.log(result)
console.log(format(result))