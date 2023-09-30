import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 增: insert into books values (null, "nodejs-roadmap", "A notebook for studying Node.js")
  await prisma.books.create({
    data: {
      title: 'nodejs-roadmap',
      introduction: 'A notebook for studying Node.js',
    },
  })
  console.log('insert')

  // 查: select * from books where title="nodejs-roadmap" limit 1
  const selected = await prisma.books.findFirst({
    where: {
      title: 'nodejs-roadmap',
    },
  })
  console.log('select', selected)

  // 改: update books set title="node.js roadmap" where id in (select id where title="nodejs-roadmap" limit 1)
  await prisma.books.updateMany({
    data: {
      title: 'node.js roadmap',
    },
    where: {
      id: {
        in: (
          await prisma.books.findMany({
            // 由于分成2次查询，容易遇到并发问题
            select: {
              id: true,
            },
            where: {
              title: 'nodejs-roadmap',
            },
            take: 1,
          })
        ).map((item) => item.id),
      },
    },
  })
  const updated = await prisma.books.findMany()
  console.log('update', updated)

  // 删：delete from books
  await prisma.books.deleteMany()
  console.log('delete')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
