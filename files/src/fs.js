const fs = require('fs')
const fsPromise = require('fs/promises')

// constants
console.log(
  fs.constants === fsPromise.constants,
  fs.constants
)

// 三种用法：
const filePath = __dirname + '/cwd.js'
// 同步用法
try {
  console.log( fs.readFileSync(filePath) )
} catch (error) {
  console.error(error)
}
// 回调用法
fs.readFile(filePath, (err, data)=>{
  if( err ) return console.error(err)
  console.log(data)
})
// Promise用法
fsPromise.readFile(filePath).then(console.log).catch(console.error)
