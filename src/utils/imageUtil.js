import Compressor from 'compressorjs';

/**
 * Compress an image for web performance.
 *
 * @param {*} img Image file.
 * @param {*} quality Output quality, 0.6 by default
 * @param {*} width Output width
 * @param {*} height Output height
 * @returns image optimized.
 */
const compressImage = async (
  img,
  quality = 0.6,
  width = 640,
  height = 640,
  callback
) => {
  //!img?.type.includes('image')
  if (!img) {
    return;
  }
  try {
    new Compressor(img, {
      quality,
      width,
      height,
      resize: 'cover',
      success(result) {
        callback(result);
      },
      error(err) {
        console.error(err.message);
      },
    });
  } catch (error) {
    console.error(
      `An unexpected error ocurred proccessing the image. ${error}`
    );
  }
};

/**
 *
 * @param {*} file File to check.
 * @returns true if the file is an image, false otherwise.
 */
const checkIsImageFile = (file) => {
  return file.type.includes('image');
};

export { compressImage, checkIsImageFile };
