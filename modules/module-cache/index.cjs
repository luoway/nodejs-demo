const { data } = require('./mod.cjs')
const { usedData } = require('./useMod.cjs')

// data 被 useMod 修改了
console.log(data, usedData)

require('./useMod.cjs')
// useMod 模块缓存了，不会再次+1
console.log(data, usedData)