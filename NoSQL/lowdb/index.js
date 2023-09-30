import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// db.json file path
const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, 'db.json')

// Configure lowdb to write data to JSON file
const adapter = new JSONFile(file)
const defaultData = { books: [] }
const db = new Low(adapter, defaultData)

// Read data from JSON file, this will set db.data content
// If JSON file doesn't exist, defaultData is used instead
await db.read()

// 增
db.data.books.push({
  title: 'nodejs-roadmap',
  introduction: 'A notebook for studying Node.js',
})
db.write()
console.log('insert')

// 查
db.read()
console.log('select', db.data.books[0])

// 改
db.data.books[0].title = 'node.js roadmap'
db.write()
db.read()
console.log('update', db.data.books[0])

// 删
db.data.books = defaultData.books
db.write()
console.log('delete')
