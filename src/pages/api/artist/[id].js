import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const handler = async (req, res) => {
  const { id } = req.query;

  try {
    await prisma.artist
      .findUnique({
        where: {
          id,
        },
      })
      .then((result) => {
        if (res.status == 500) {
          console.error(`Internal server error.`);
        }

        if (!result) {
          res.status(404).json({
            msg: `There is no artist with the id ${id}`,
          });
        }

        res.status(201).json({
          data: result,
        });
      })
      .catch((err) =>
        console.error(`An error ocurred get artist info. ${err}`)
      );
  } catch (error) {
    console.error(`Unexpected error ocurred getting artist data. ${error}`);
  }
};

export default handler;
