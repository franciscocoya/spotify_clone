/**
 * Animation for progress bar of the audio player.
 * @version v0.0.1
 */
const playerMarker1 = document.getElementById('progress-bar__marker');
const playerElapsedProgress = document.getElementById(
  'progress-bar-bg__elapsed'
);
const playerTotalProgress = document.getElementById('progress-bar-bg__total');
const genuineProgress = document.getElementById(
  'player-genuine-progress-slider'
);

/**
 *
 * @param {*} isMarkerOnHover true if cursor is up to progress marker
 * @param {*} isCursorOnProgressHover
 */
const animateProgressbar = () => {
  playerMarker1.addEventListener('mouseExited', () => {
    playerElapsedProgress.style.opacity = 0.9;
  });
};

genuineProgress.addEventListener('hover', () => {
  console.log('hover');
  playerElapsedProgress.style.opacity = 0;
});
