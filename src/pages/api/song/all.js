import { ref, storage } from '@lib/firebaseConfig';
import { PrismaClient } from '@prisma/client';
import { getDownloadURL } from 'firebase/storage';
const prisma = new PrismaClient();

const handler = async (req, res) => {
  const { limit } = req.query;
  try {
    await prisma.track
      .findMany({
        include: {
          album: {
            select: {
              id: true,
              name: true,
            },
          },
          performedBy: {
            select: {
              artistId: true,
            },
          },
        },
        take: Number(limit) || 10,
      })
      .then(async (result) => {
        if (res.status === 500) {
          res.status(500).json({
            msg: `Internal server error`,
          });
        }

        if (!result) {
          res.status(404).json({
            msg: `The are no tracks`,
          });
        }

        res.status(201).json({
          tracks: result,
        });
      })
      .catch((err) => {
        console.error(`An error ocurred listing all songs. ${err}`);
      });
  } catch (error) {
    console.error(`An unexpected error ocurred during execution. ${error}`);
  }
};

const getSongData = async (path) => {
  const url = await getDownloadURL(ref(storage, path)).catch((err) =>
    console.error('An error ocurred while song was downloading. ' + err)
  );

  return url;
};

export default handler;
