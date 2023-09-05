// 仅执行一次
console.log('mod.mjs is loaded')

export function sayHelloMjs() {
    console.log('sayHello, ES modules')
}

export const type = 'ES modules'