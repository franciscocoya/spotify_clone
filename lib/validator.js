const EMAIL_REGEX =
  /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

const isValidEmail = (email) => {
  return valueExists(email) && email.match(EMAIL_REGEX);
};

/**
 * Check if passwords match.
 * @param {*} pw1 Original password.
 * @param {*} pw2 Repeated password.
 * @returns true if match, false otherwise.
 */
const passwordMached = (pw1, pw2) => {
  return valueExists(pw1) && valueExists(pw2) && pw1 === pw2;
};

/**
 * Check if string value is not empty.
 * @param {*} value String value.
 * @returns true if not empty, false otherwise.
 */
const isNotEmpty = (value) => {
  return valueExists(value) && value.length > 0;
};

/**
 * Check if value is valid. Precondition if required.
 * @param {*} value
 * @returns true if value exists, false otherwise
 */
const valueExists = (value) => {
  return typeof value !== 'undefined' && value;
};

/**
 * Throw an error if the validation funtion return false.
 *
 * @param {*} value The value to check.
 * @param {*} validationFunction Validation function to apply.
 * @param {*} errorMsg An error message if not validate
 */
const validate = (value, validationFunction, errorMsg = '') => {
  if (!validationFunction(value)) {
    throw new Error(errorMsg);
  }
};

export { isValidEmail, passwordMached, isNotEmpty, validate };
