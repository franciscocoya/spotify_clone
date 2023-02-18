const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const isValidEmail = (email) => {
  return valueExists(email) && EMAIL_REGEX.test(email);
};

/**
 * Check if passwords match.
 * @param {*} pw1 Original password.
 * @param {*} pw2 Repeated password.
 * @returns true if match, false otherwise.
 */
const fieldsMatched = (params) => {
  return params.every((p) => valueExists(p) && p === params[0]);
};

/**
 * Check if string value is not empty.
 * @param {*} value String value.
 * @returns true if not empty, false otherwise.
 */
const isNotEmpty = (value) => {
  return valueExists(value);
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
 * @param {*} params Values to check.
 * @param {*} validationFunction Validation function to apply.
 * @param {*} errorMsg An error message if not validate
 */
const validate = (validationFunction, errorMsg = '', ...params) => {
  try {
    if (!validationFunction(params)) {
      throw new Error(errorMsg);
    }
  } catch (error) {
    console.error('Validation function error. ' + error);
  }
};

export { isValidEmail, fieldsMatched, isNotEmpty, validate };
