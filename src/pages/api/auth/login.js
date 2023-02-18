import prisma from '@lib/prisma';
var bcrypt = require('bcryptjs');

const handler = async (req, res) => {
  const { email, password } = req.body;

  await prisma.user
    .findUnique({
      where: {
        email,
      },
    })
    .then(async (result) => {
      if (!result) {
        res.status(404).json({
          msg: 'There are no exists a user with this email/username',
        });
        await prisma.$disconnect();
      }

      const remotePass = result?.password;
      const isPasswordValid = await comparePassword(password, remotePass);

      if (!isPasswordValid) {
        res.status(404).json({
          msg: 'Password is not valid. Please, try again',
        });
      }

      res.status(201).json({
        username: result.username,
        email,
      });
    })
    .catch(async (err) => {
      console.log('ERROR. ' + err);
      await prisma.$disconnect();
    });
};

/**
 * Compare if a plain text password is equal to hashed password.
 * @param {*} plainPass Password as plain text.
 * @param {*} hashedPass Password as hash
 * @returns true if password is valid and false in other case
 */
const comparePassword = async (plainPass, hashedPass, errorCallback) => {
  return await bcrypt.compareSync(plainPass, hashedPass);
};

export default handler;
