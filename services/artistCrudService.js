import { artistRoute } from '@lib/apiRoutes';
import axios from 'axios';

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

export { getArtistById, getArtistNameById };
