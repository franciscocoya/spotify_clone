import moment from 'moment';

/**
 * Transform a durations in seconds into the following format: mm:ss

 * @param {*} duration In seconds.
 * @returns 
 */
const prettyDuration = (duration) => {
  if (isNaN(duration)) {
    return '-:-';
  }

  if (duration === 0) {
    return '00:00';
  }

  let seconds = Math.floor(duration % 60);
  let minutes = Math.floor(seconds / 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
};

/**
 * Format bytes size as __KB (eg. 14951 bytes = 14.6KB)
 * @param {*} bytes
 * @param {*} decimal
 * @returns
 */
const prettySize = (bytes, decimals = 2) => {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

const convertToRelativeDate = (date) => {
  //2023-01-18T16:05:56.041Z
  if (!date) {
    return;
  }
  const datePart1 = date.toString().split('T')[0];
  const datePart2 = date.toString().split('T')[1];
  return moment(`${datePart1} ${datePart2}`, 'YYYY-MM-DD h:mm:ss').fromNow();
};

export { prettyDuration, convertToRelativeDate, prettySize };
