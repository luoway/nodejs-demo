import {sayHelloMjs, type as mjsType } from './mod.mjs'
import {sayHelloCjs, type as cjsType} from './mod.cjs'
import * as cModEmpty from './mod-empty.cjs'
import * as mModEmpty from './mod-empty.mjs'

// 异步执行
sayHelloCjs()
sayHelloMjs()

console.log(mjsType, cjsType) // ES modules undefined

console.log(cModEmpty, typeof cModEmpty, cModEmpty.default)
console.log(mModEmpty, typeof mModEmpty, mModEmpty.default)