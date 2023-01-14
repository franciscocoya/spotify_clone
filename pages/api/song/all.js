import { songRef } from '@lib/firebaseConfig';
import { listAll } from 'firebase/storage';

const handler = async (req, res) => {
  await listAll(songRef)
    .then((result) => {
      result.items.forEach((song) => {
        // All the items under listRef.
        console.log(song.fullPath);
      });
    })
    .catch((err) => console.error(err));

  res.end();
};

export default handler;
