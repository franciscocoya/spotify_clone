import { signInRoute, signUpRoute } from '@lib/apiRoutes';
import { homeRoute } from '@lib/routes';
import { isNotEmpty, isValidEmail, validate } from '@lib/validator';
import axios from 'axios';

/**
 * Create an account in the app.
 * @param {*} payload All user information
 */
const createAccount = async ({ payload }) => {
  try {
    const { username, email, password } = payload;
    await axios
      .post(signUpRoute, {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        /* Redirect to Home page */
        //router.push('/');
      })
      .catch((err) => console.log(err));
  } catch (exception) {
    console.error(`An error ocurred at create an account. ${exception}`);
  }
};

/**
 * Login a user in the app.
 * @param {*} email User email
 * @param {*} password User plain password
 */
const login = async (email, password) => {
  try {
    validateLoginParams(email, password);
    await axios
      .post(signInRoute, {
        email,
        password,
      })
      .then((res) => {
        router.push(homeRoute);
      })
      .catch((err) => {
        handle(err, (st, msg) => {
          setError(msg);
        });
      });
  } catch (exception) {
    console.error(`An error ocurred at login. ${exception}`);
  }
};

/**
 * Validate login fields.
 * @param {*} email
 * @param {*} password
 */
const validateLoginParams = (email, password) => {
  validate(email, isNotEmpty, `Email is required`);
  validate(email, isValidEmail, `Email not valid`);
  validate(password, isNotEmpty, `Password is required`);
};

export { createAccount, login };
