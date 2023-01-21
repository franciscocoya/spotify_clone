// import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
// const ffmpeg = createFFmpeg({ log: true });

const jsmediatags = require('jsmediatags');

//! TODO: Without testing
// const compressAudioFile = async (audio) => {
//   await ffmpeg.load();
//   ffmpeg.FS('writeFile', audio, await fetchFile('./test.avi'));
//   await ffmpeg.run('-i', 'test.avi', 'test.mp4');
//   await fs.promises.writeFile('./test.mp4', ffmpeg.FS('readFile', 'test.mp4'));
//   process.exit(0);
// };

const extractAudioMetadata = async (audio) => {
  if (!audio) {
    return;
  }

  try {
    await new jsmediatags.Reader(audio).read({
      onSuccess: (tag) => {
        console.log('Success!');
        console.log(tag);
      },
      onError: (error) => {
        console.log('Error');
        console.log(error);
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

const checkIsAudioFile = (file) => {
  return file.type.includes('audio');
};

export { extractAudioMetadata, checkIsAudioFile };
