/**
 * Login with credentials.
 *
 * @param {*} email User email
 * @param {*} password Plain password
 */
const handler = async (req, res) => {
  const { email, password, username } = req.body;

  //const hashedPassword = await bcrypt.hashSync(password, 10);

  res.status(201).json({
    email,
    password,
    username,
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
  //     console.log('Session established !!');

  //     return res.state(201).json({
  //       email,
  //       username,
  //     });
  //   })
  //   .catch((e) => {
  //     console.error('An error ocurren while creating the account. ' + e);
  //     process.exit(1);
  //   });
};

export default handler;
