import { Prisma } from '@prisma/client';

const handle = (err, callback) => {
  if (err) {
    // Prisma ORM error
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        console.log('Unique constraint violation.');
      }
    }
    const { status, data } = err.response;
    callback(status, data.msg);
  }
};

export default handle;
