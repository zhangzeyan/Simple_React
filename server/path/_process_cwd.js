const path = require('path')

const mod = require('../base/_cusmod')

console.log(mod.testVar)

console.log('dirname: ', __dirname)
console.log('process.cwd(): ', process.cwd())
console.log('./', path.resolve('./'))