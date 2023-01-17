const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Users
  await prisma.user.upsert({
    where: { email: 'peyton.rodriguez@example.com' },
    update: {},
    create: {
      email: 'peyton.rodriguez@example.com',
      username: 'cloakedlodge',
      password: '$2a$10$fVBrmV3iqqqCSoXQezuEAu4bWijKvWJFYmg71ax1z/xVb0NB8BD0K',
      profileImage: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
  });

  await prisma.user.upsert({
    where: { email: 'sunrisematch@gmail.com' },
    update: {},
    create: {
      email: 'sunrisematch@gmail.com',
      username: 'sunrisematch',
      password: '$2a$10$fVBrmV3iqqqCSoXQezuEAu4bWijKvWJFYmg71ax1z/xVb0NB8BD0K',
      profileImage: 'https://randomuser.me/api/portraits/women/75.jpg',
    },
  });

  await prisma.user.upsert({
    where: { email: 'dwightCGutierrez@rhyta.com' },
    update: {},
    create: {
      email: 'dwightCGutierrez@rhyta.com',
      username: 'Himince',
      password: '$2a$10$XekXk2.aTGLz5P0BNULmEejuSJIO8I1BwNmCaLzQy2t4zqP.R3qgq',
      profileImage: 'https://randomuser.me/api/portraits/men/84.jpg',
    },
  });

  await prisma.user.upsert({
    where: { email: 'NancyTBeverly@gmail.com' },
    update: {},
    create: {
      email: 'NancyTBeverly@gmail.com',
      username: 'Carty1992',
      password: '$2a$10$2CZneNx1CpynQ6KI1mIutumpj3DGWvH7Nfi.snL7R4ZtqMVYAi.wK',
      profileImage: 'https://randomuser.me/api/portraits/women/0.jpg',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
