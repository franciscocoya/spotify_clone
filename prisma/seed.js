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

  // // Artists
  // await prisma.artist.upsert({
  //   where: { email: 'NancyTBeverly@gmail.com' },
  //   update: {},
  //   create: {
  //     name: 'M-Clan',
  //     email: 'mclan@spotify.com',
  //     biography:
  //       "Formerly known as Murcielagos Clan, M-Clan was formed in the early '90s. Heavily influenced by Southern rock, M-Clan debuted with Un Buen Momento in 1996, followed by Coliseum a year later. In 1999, ex-  produced Usar y Tirar, which provided an acclaimed slice of the band's folk, blues, and hard rock style. On November 23, 2000, a live acoustic performance was recorded, becoming M-Clan's fourth record. Sin Enchufe was released in 2001. After 2002's Defectos Personales , M-Clan released Sopa Fría in 2004, and a career retrospective, Retrovisión in 2006. Memorias de un Espantapájaros followed in 2008, before Para No Ver el Final in 2010, while in 2012 the Spanish rockers released Arenas Movedizas. ~ Drago Bonacich, Rovi",
  //     verified: true,
  //     songs: {
  //       create: {
  //         url: '',
  //         title: 'Carolina - En directo 2000',
  //         cover:
  //           'https://i.scdn.co/image/ab67616d00001e0287eba30aba5c13ac3a259fc0',

  //       },
  //     },
  //   },
  // });
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
