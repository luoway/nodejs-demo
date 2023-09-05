import { data } from './mod.mjs'
// data 被 useMod 提升后+1
console.log(data)

import { usedData } from './useMod.mjs'
console.log(data, usedData)

import './useMod.mjs'
// 由于 hoisted，不会再次+1
console.log(data, usedData)