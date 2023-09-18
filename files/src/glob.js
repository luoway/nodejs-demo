const { glob } = require('glob')

;(async ()=>{
  const files = await glob('**/*')
  console.log(files)
})()