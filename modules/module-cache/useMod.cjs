const { data } = require('./mod.cjs')
data.value += 1

module.exports = {
    usedData: data
}