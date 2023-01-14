/**
 * Transform a durations in seconds into the following format: mm:ss

 * @param {*} duration In seconds.
 * @returns 
 */
const prettyDuration = (duration) => {
  if (!duration || isNaN(duration)) {
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

export { prettyDuration };
