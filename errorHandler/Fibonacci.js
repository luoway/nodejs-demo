// node  --inspect-brk Fibonacci.js
const looping = n => {
    let a = 0, b = 1, result = 1
    for(let i = 2; i <= n; i++){
        result = a + b
        a = b
        b = result
        debugger
    }
    return result
}
looping(5)