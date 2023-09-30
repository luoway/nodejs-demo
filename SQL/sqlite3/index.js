import sqlite from "sqlite3"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const db = new sqlite.Database(resolve(__dirname, 'demo.db'))
db.run('CREATE TABLE books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TINYTEXT, introduction TEXT)')
db.close()