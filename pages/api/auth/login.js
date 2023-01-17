import prisma from '@lib/prisma';
import { setCookie } from 'cookies-next';
var bcrypt = require('bcryptjs');

const handler = async (req, res) => {
  const { email, password } = req.body;

  await prisma.user
    .findMany({
      where: {
        OR: [{ email: { equals: email } }, { username: { equals: email } }],
      },
    })
    .then(async (result) => {
      if (!result) {
        res.status(404).json({
          msg: 'There are no exists a user with this email/username',
        });
      }

      const remotePass = result[0]?.password;

      const isPasswordValid = await comparePassword(password, remotePass);
      console.log(isPasswordValid);

      if (!isPasswordValid) {
        res.status(404).json({
          msg: 'Password is not valid. Please, try again',
        });
      }

      //proccess.env.LOGGED_COOKIE
      setCookie('logged', true);

      res.status(201).json({
        email: result.email,
        username: result.username,
      });
    })
    .catch((err) => {
      console.log('ERROR. ' + err);
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
