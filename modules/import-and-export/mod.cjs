// 仅执行一次
console.log('mod.cjs is loaded')

module.exports.type = 'commonjs'
// 覆盖了上面的 type 导出
module.exports = {
    sayHelloCjs: function() {
        console.log('sayHello, commonjs')
    }
}