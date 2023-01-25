const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clear tables
  await prisma.artistTrack.deleteMany();
  await prisma.artist.deleteMany();
  await prisma.user.deleteMany();

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

  // Tracks
  await prisma.track.upsert({
    where: { id: 'd3519fce-bc44-4703-8a21-b730bcd0b9f6' },
    update: {},
    create: {
      id: 'd3519fce-bc44-4703-8a21-b730bcd0b9f6',
      title: 'Si te vas',
      url: '',
      cover: 'https://i.scdn.co/image/ab67616d0000b2734db5099df3d763840e1634a9',
      genre: 'Rock',
    },
  });

  await prisma.track.upsert({
    where: { id: '5b50aa06-af70-4dae-a551-97e275dfeea6' },
    update: {},
    create: {
      id: '5b50aa06-af70-4dae-a551-97e275dfeea6',
      title: 'sunflowers',
      url: '',
      cover:
        'https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      genre: 'Lo-fi',
    },
  });

  await prisma.track.upsert({
    where: { id: '31f8f332-a6d7-47a4-9c26-1c62d4f2c14a' },
    update: {},
    create: {
      id: '31f8f332-a6d7-47a4-9c26-1c62d4f2c14a',
      title: 'slow dancing in the dark',
      url: '',
      cover:
        'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      genre: 'Lo-fi',
    },
  });

  await prisma.track.upsert({
    where: { id: '4714da0d-034b-4d3b-82b4-6fd89da3781c' },
    update: {},
    create: {
      id: '4714da0d-034b-4d3b-82b4-6fd89da3781c',
      title: 'otherside',
      url: '',
      cover:
        'https://images.unsplash.com/photo-1634855105161-2f328c473638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      genre: 'Lo-fi',
    },
  });

  await prisma.track.upsert({
    where: { id: '60bb4e45-d1c7-42ce-b4d4-f2ef44927631' },
    update: {},
    create: {
      id: '60bb4e45-d1c7-42ce-b4d4-f2ef44927631',
      title: 'Hotling bling',
      url: '',
      cover:
        'https://images.unsplash.com/photo-1635791012334-f6af2d9b2a78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      genre: 'Lo-fi',
    },
  });

  // Artist
  await prisma.artist.upsert({
    where: { id: '95308e42-0015-4d51-a41a-b03c2a0247a0' },
    update: {},
    create: {
      id: '95308e42-0015-4d51-a41a-b03c2a0247a0',
      name: 'Yedai',
      biography: '',
      email: 'yedai@spotifyclone.com',
      profileImage:
        'https://xsgames.co/randomusers/assets/avatars/female/25.jpg',
      genres: ['Lo-fi'],
      followers: 500000,
    },
  });

  await prisma.artist.upsert({
    where: { id: '3a65564e-44c4-4be2-81e5-66b987d5295f' },
    update: {},
    create: {
      id: '3a65564e-44c4-4be2-81e5-66b987d5295f',
      name: 'owlh',
      biography: '',
      email: 'owlh@spotifyclone.com',
      profileImage:
        'https://xsgames.co/randomusers/assets/avatars/female/26.jpg',
      genres: ['Lo-fi'],
      followers: 205330,
    },
  });

  await prisma.artist.upsert({
    where: { id: '9b55acb1-5220-4d7e-8873-7b1ed77d4c4f' },
    update: {},
    create: {
      id: '9b55acb1-5220-4d7e-8873-7b1ed77d4c4f',
      name: 'Miro Mas',
      biography: '',
      email: 'miromas@spotifyclone.com',
      profileImage: 'https://xsgames.co/randomusers/assets/avatars/male/69.jpg',
      genres: ['Lo-fi', 'pop', 'Tech house'],
      followers: 3500,
    },
  });

  await prisma.artist.upsert({
    where: { id: '376960cc-8ea1-48fc-8807-abb9fdddd2cb' },
    update: {},
    create: {
      id: '376960cc-8ea1-48fc-8807-abb9fdddd2cb',
      name: 'Extremoduro',
      biography:
        "Spanish hard rockers Extremoduro started playing in the late '80s as a threesome, led by singer/guitarist Roberto Iniesta. In January of 1989, the band recorded its first demo tape, Rock Transgresivo. Soon they were playing on a TV show called Plastic and participating in a contest sponsored by Yamaha, which offered them the opportunity to sign up to independent label  and later to Area Creativa. In 1991, the group started working with local label , releasing Deltoya in 1992, featuring contributions from ex- guitarist  and Spanish hard rock legend . Following that release came 1993's ¿Dónde Estan Mis Amigos?, 1994's \"official\" reissue of Rock Transgresivo, and 1995's Pedrá, an experimental record. Their 1996 effort, Agíla, became their breakthrough record, and even with a rough image and controversial subject matter, the band continued to become more and more popular during the 2000s. La Ley Innata, released in 2008, hit number one in Spain, handily beating's Death Magnetic (released the same week). Extremoduro's tenth studio album, Material Defectuoso, appeared in the spring of 2011. After spending four weeks at number one, it spent an additional year in the charts. Para Todos Los Publicos nearly topped that feat, debuting at number one in November 2013 and charting until the spring of 2015. ~ Drago Bonacich & John D. Buchanan, Rovi",
      email: 'extremoduro@spotifyclone.com',
      profileImage: 'https://img2.rtve.es/i/?w=1600&i=1670691764382.jpg',
      genres: ['Rock'],
      followers: 1121962,
    },
  });

  // Artist tracks
  // await prisma.artistTrack.create({
  //   data: {
  //     artistId: '95308e42-0015-4d51-a41a-b03c2a0247a0',
  //     trackId: 'd3519fce-bc44-4703-8a21-b730bcd0b9f6',
  //   },
  // });

  // await prisma.artistTrack.create({
  //   data: {
  //     artistId: '5b50aa06-af70-4dae-a551-97e275dfeea6',
  //     trackId: '31f8f332-a6d7-47a4-9c26-1c62d4f2c14a',
  //   },
  // });

  // await prisma.artistTrack.create({
  //   data: {
  //     artistId: '95308e42-0015-4d51-a41a-b03c2a0247a0',
  //     trackId: '4714da0d-034b-4d3b-82b4-6fd89da3781c',
  //   },
  // });

  // await prisma.artistTrack.create({
  //   data: {
  //     artistId: '3a65564e-44c4-4be2-81e5-66b987d5295f',
  //     trackId: '60bb4e45-d1c7-42ce-b4d4-f2ef44927631',
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
