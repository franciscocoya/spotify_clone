import prisma from '@lib/prisma';
import bcrypt from 'bcryptjs';

/**
 * Login with credentials.
 *
 * @param {*} email User email
 * @param {*} password Plain password
 */
const handler = async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  await prisma.user
    .create({
      data: {
        email,
        password: hashedPassword,
        username: 'prueba',
      },
    })
    .then(() => {
      console.log('sesión iniciada !!');

      return res.state(201).json({
        email,
        hashedPassword,
      });
    })
    .catch((e) => {
      console.error('Error al iniciar sesión. ' + e);
      process.exit(1);
    });
};

export default handler;
