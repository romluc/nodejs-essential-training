const path = require('path')

// console.log(__dirname)
// console.log(__filename)

// console.log(path)

console.log(`The file name is ${path.basename(__filename)}`)
console.log(`The directory is ${path.dirname(__filename)}`)
console.log(`The file extension is ${path.extname(__filename)}`)
