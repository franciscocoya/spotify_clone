const setProgress = (value) => {
  document.getElementById('progress-bar__marker').style.left =
    value + (value > 0 && 'px');
  document.getElementById('progress-bar-bg__elapsed').style.width =
    value + 25 / 2 + 'px';
};

const moveProgressMarker = (e) => {
  const progressValue = e.target.value;

  if (progressValue <= 0) {
    setProgress(0);
  } else if (progressValue >= 100) {
    setProgress(500 - 20 / 2);
  } else if (progressValue >= 64 && progressValue <= 80) {
    setProgress((500 * progressValue * 1.0) / 100.0 - 10);
  } else if (progressValue > 80 && progressValue < 97) {
    setProgress((500 * progressValue * 1.0) / 100.0 - 12);
  } else if (progressValue >= 97 && progressValue < 100) {
    setProgress((500 * progressValue * 1.0) / 100.0 - 15);
  } else {
    setProgress((500 * progressValue * 1.0) / 100.0 - 5);
  }

  return progressValue;
};

const hideProgressIcons = (e, hide) => {
  e.preventDefault();
  document.getElementById('progress-bar__marker').style.opacity = hide ? 0 : 1;
  document.getElementById('progress-bar-bg__elapsed').style.opacity = hide
    ? 0.9
    : 0;
};

export { moveProgressMarker, hideProgressIcons };
