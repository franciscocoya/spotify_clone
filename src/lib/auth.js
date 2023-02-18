import { signInRoute, signUpRoute } from '@lib/apiRoutes';
import {
  fieldsMatched,
  isNotEmpty,
  isValidEmail,
  validate,
} from '@lib/validator';
import axios from 'axios';

/**
 * Create an account in the app.
 * @param {*} payload All user information
 */
const createAccount = async (payload) => {
  try {
    const {
      username,
      email,
      emailConfirmation,
      password,
      passwordConfirmation,
    } = payload;

    validateCreateAccountParams(
      username,
      email,
      emailConfirmation,
      password,
      passwordConfirmation
    );

    await axios
      .post(
        signUpRoute,
        {
          username,
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          console.log('registrado!');
        }

        // TODO: adding login cookie
        /* Redirect to Home page */
        //router.push('/');
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.error(`An error ocurred at create an account. ${error}`);
  }
};

/**
 * Login a user in the app.
 * @param {*} email User email
 * @param {*} password User plain password
 */
const login = async (email, password, callback) => {
  try {
    validateLoginParams(email, password);
    await axios
      .post(
        signInRoute,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log('logged');
        // redirecto to home page
        callback(res.data, true);
      })
      .catch((err) => {
        console.error('An error ocurred. ' + err);
        // handle(err, (st, msg) => {
        //   //TODO:
        //   console.log('Login error' + err);
        // });
      });
  } catch (error) {
    console.error(`An error ocurred at login. ${error}`);
  }
};

/**
 * Validate login form fields.
 * @param {*} email
 * @param {*} password
 */
const validateLoginParams = (email, password) => {
  validate(isNotEmpty, `Email is required`, email);
  validate(isValidEmail, `Email not valid`, email);
  validate(isNotEmpty, `Password is required`, password);
};

/**
 * Validate create an account form fields.
 * @param {*} username
 * @param {*} email
 * @param {*} emailConfirmation
 * @param {*} password
 * @param {*} passwordConfirmation
 */
const validateCreateAccountParams = (
  username,
  email,
  emailConfirmation,
  password,
  passwordConfirmation
) => {
  validate(isNotEmpty, 'Email is required', email);
  validate(isNotEmpty, 'Password is required', password);
  validate(isNotEmpty, 'Username is required', username);
  validate(
    isNotEmpty,
    'You must to fill email confirmation field',
    emailConfirmation
  );
  validate(
    isNotEmpty,
    'You must to fill password confirmation field',
    passwordConfirmation
  );
  validate(fieldsMatched, 'Emails not matched', email, emailConfirmation);
  validate(
    fieldsMatched,
    'Passwords not matched',
    password,
    passwordConfirmation
  );
};

export { createAccount, login };
