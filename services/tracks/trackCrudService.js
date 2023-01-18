import { homeTracks } from '@lib/apiRoutes';
import axios from 'axios';

const getLimitedTracks = async (number) => {
  const result = await axios.get(homeTracks, { params: { limit: 5 } });
  return result.data.tracks;
};

export { getLimitedTracks };
