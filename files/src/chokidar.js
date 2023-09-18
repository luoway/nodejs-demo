const chokidar = require('chokidar')

// . 表示 process.cwd()
chokidar.watch('.').on('all', (event, path) => {
  console.log(event, path)
})