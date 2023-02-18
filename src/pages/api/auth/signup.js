var bcrypt = require('bcryptjs');

/**
 * Login with credentials.
 *
 * @param {*} email User email
 * @param {*} password Plain password
 */
const handler = async (req, res) => {
  const { email, password, username } = req.body;

  console.log(req.headers);

  //const hashedPassword = await bcrypt.hashSync(password, 10);

  console.log(password);
  res.status(201).json({
    data: req.body,
  });

  // await prisma.user
  //   .create({
  //     data: {
  //       email,
  //       password: hashedPassword,
  //       username,
  //     },
  //   })
  //   .then(() => {
  //     return res.state(201).json({
  //       email,
  //       username,
  //     });
  //   })
  //   .catch(async (e) => {
  //     handle(err, () => {});
  //     console.error('An error ocurren while creating the account. ' + e);
  //     await prisma.$disconnect();
  //     process.exit(1);
  //   });
};

export default handler;
