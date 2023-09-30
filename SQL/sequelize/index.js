import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'sqlite3/demo.db',
})

const Books = sequelize.define(
  'books',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    introduction: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
)

console.log(Books === sequelize.models.books) // true

// 增: insert into books values (null, "nodejs-roadmap", "A notebook for studying Node.js")
await Books.create({
  title: 'nodejs-roadmap',
  introduction: 'A notebook for studying Node.js',
})
console.log('insert')
// 查: select * from books where title="nodejs-roadmap" limit 1
const selected = await Books.findAll({
  where: {
    title: 'nodejs-roadmap',
  },
  limit: 1,
})
console.log('select', selected[0].dataValues)
// 改: update books set title="node.js roadmap" where id in (select id where title="nodejs-roadmap" limit 1)
await Books.update(
  {
    title: 'node.js roadmap',
  },
  {
    where: {
      title: 'nodejs-roadmap',
    },
    limit: 1,
  }
)
const updated = await Books.findAll()
console.log('update', updated.map((item) => item.dataValues))
// 删：delete from books
await Books.destroy({
  truncate: true, // truncate 不能回滚，实际使用的 delete
})
console.log('delete')
