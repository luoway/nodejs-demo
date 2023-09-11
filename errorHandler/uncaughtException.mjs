import { createInterface } from 'node:readline'

const reader = createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('输入任意内容以报错')

reader.on('line', line=>{
  console.log(line)
  Promise.reject(line)
  throw new Error(line)
})

process.on('uncaughtException', (err, origin)=>{
  console.log(16, 'uncaughtException')
  console.log(err)
  console.log(origin)
  // 处理同步错误先于异步错误
  process.exit(1)
})

process.on('unhandledRejection', err=>{
  console.log(23, 'unhandledRejection')
  console.log(err)
})