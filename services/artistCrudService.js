import { artistRoute } from '@lib/apiRoutes';
import axios from 'axios';

/**
 * Create an artist account.
 * @param {*} payload Payload must have at least the following fields: name, email and password.
 * The rest of the fields such as bio or page banner are optional.
 * @returns
 */
const create = (payload, errorCallback) => {
  try {
    const errors = validateCreateParams(payload);
    if (errors?.length > 0) {
      errorCallback(errors);
      console.log(errors);
      return;
    }

    const { name, email, password, bio, pageBanner } = payload;

    // const data = new FormData();
    // data.append('name', name);
    // data.append('email', email);
    // data.append('password', password);
    // data.append('bio', bio);
    // data.append('banner', pageBanner);

    //await axios.post(`${artistRoute}/new`, data);
  } catch (error) {
    console.error(`An error ocurred. ${error}`);
  }
};

/**
 * Auxiliar method of {@link create} to validate its params.
 * @param {*} payload Params to validate.
 * @returns An error list.
 */
const validateCreateParams = (payload) => {
  const { name, email, password, bio, pageBanner } = payload;

  let errors = new Map();

  if (!name || name.replace(/\s/g, '') === '') {
    errors.set('name', 'components.messages.form.error.empty');
  }

  return errors;
};

/**
 * Get all artist data by their id.
 * @param {*} id Artist id to search
 * @returns All artist information.
 */
const getArtistById = async (id) => {
  await axios.get(`${artistRoute}/${id}`);
  return result.data.data;
};

/**
 * Get only artist name.
 * @param {*} id Artist id.
 * @returns Artist name.
 */
const getArtistNameById = async (id) => {
  const result = await axios.get(`${artistRoute}/${id}`);
  return result.data.data.name;
};

export { getArtistById, getArtistNameById, create };
