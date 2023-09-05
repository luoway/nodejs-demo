// const mod = require('./mod.mjs') // Error [ERR_REQUIRE_ESM]
const { sayHelloCjs, type } = require('./mod.cjs')

sayHelloCjs()
console.log(type) // undefined

const modEmpty = require('./mod-empty.cjs')
console.log(modEmpty)