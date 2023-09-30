import knex from 'knex'
// 打开数据库
const client = knex({
    client: 'sqlite3',
    connection: {
        filename: 'sqlite3/demo.db'
    },
    useNullAsDefault: true
})
// 增: insert into books values (null, "nodejs-roadmap", "A notebook for studying Node.js")
await client('books').insert({
    title: 'nodejs-roadmap',
    introduction: 'A notebook for studying Node.js',
})
console.log('insert');
// 查: select * from books where title="nodejs-roadmap" limit 1
const selected = await client('books').select().where({title: 'nodejs-roadmap'}).first()
console.log('select', selected);
// 改: update books set title="node.js roadmap" where id in (select id where title="nodejs-roadmap" limit 1)
await client('books').where({title: 'nodejs-roadmap'}).first().update({title: 'node.js roadmap'})
const updated = await client('books').select()
console.log('update', updated);
// 删: delete from books
await client('books').del()
console.log('delete');
// 关闭数据库
client.destroy()