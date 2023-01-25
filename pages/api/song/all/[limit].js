import { ref, songRef, storage } from '@lib/firebaseConfig';
import { getDownloadURL, list } from 'firebase/storage';

const handler = async (req, res) => {
  let songs = [];
  const { limit } = req.params;
  console.log('limit: ' + limit);

  await list(songRef, { maxResults: limit || 5 })
    .then((result) => {
      result.items.forEach(async (song) => {
        await getSongData(song.fullPath).then((url) => {
          songs.push(url);
          if (songs.length === result.items.length) {
            res.status(201).json({
              songs,
            });
          }
        });
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(404).json({
        msg: err,
      });
    });
};

const getSongData = async (path) => {
  const url = await getDownloadURL(ref(storage, path)).catch((err) =>
    console.error('An error ocurred while song was downloading. ' + err)
  );

  return url;
};

export default handler;
