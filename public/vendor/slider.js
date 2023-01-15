const whiteColor = '#FFFFFF';
const empashisColor = '#1ED760';

// Changes the styles of the elements in the progress bar when the cursor is positioned above or outside it.
const hideProgressIcons = (
  e,
  progressElapsedId,
  progressMarkerId,
  currentValue,
  hide
) => {
  e.preventDefault();

  hide
    ? setProgressElementStyle(
        0,
        currentValue > 0 ? 0.9 : 0,
        whiteColor,
        progressElapsedId,
        progressMarkerId
      )
    : setProgressElementStyle(
        1,
        1,
        empashisColor,
        progressElapsedId,
        progressMarkerId
      );
};

// Changes the progress bar style properties (Marker and elapsed time bar)
const setProgressElementStyle = (
  markerOpacity,
  elapsedOpacity,
  elapsedBackgroundColor,
  progressElapsedId,
  progressMarkerId
) => {
  document.getElementById(progressMarkerId).style.opacity = markerOpacity;
  document.getElementById(progressElapsedId).style.opacity = elapsedOpacity;
  document.getElementById(progressElapsedId).style.backgroundColor =
    elapsedBackgroundColor;
};

export { hideProgressIcons };
