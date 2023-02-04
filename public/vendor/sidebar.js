// Sidebar resize element
const resizeElement = document.getElementById('app-aside-resize');

// Properties to change
const resizeData = {
  tracking: false,
  startWidth: null,
  startCursorScreenX: null,
  handleWidth: 10,
  resizeTarget: null,
  parentElement: null,
  maxWidth: null,
};

resizeElement.addEventListener('mousedown', (e) => {
  if (e.button !== 0) {
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  const handleElement = e.currentTarget;

  if (!handleElement.parentElement) {
    return;
  }

  // Sidebar
  const targetSelector = handleElement.getAttribute('data-target');
  const targetElement = selectTarget(
    handleElement.parentElement,
    targetSelector
  );

  if (!targetElement) {
    return;
  }

  //targetElement.outerWidth
  resizeData.startWidth = 260;
  resizeData.startCursorScreenX = e.screenX;
  resizeData.resizeTarget = targetElement;
  resizeData.parentElement = handleElement.parentElement;
  //handleElement.parentElement.innerWidth - resizeData.handleWidth
  resizeData.maxWidth = 500;
  resizeData.tracking = true;
});

// While user move resize element then sidebar change its width acording to
// the mouse position
window.addEventListener(
  'mousemove',
  debounce((e) => {
    if (resizeData.tracking) {
      const cursorScreenXDelta = e.screenX - resizeData.startCursorScreenX;
      const newWidth = Math.min(
        resizeData.startWidth + cursorScreenXDelta,
        resizeData.maxWidth
      );

      resizeData.resizeTarget.outerWidth = newWidth;
    }
  }, 1)
);

// Stop resizing
window.addEventListener('mouseup', (e) => {
  if (resizeData.tracking) {
    resizeData.tracking = false;

    console.log('tracking stopped');
  }
});

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const selectTarget = (fromElement, selector) => {
  if (!(fromElement instanceof HTMLElement)) {
    return null;
  }

  return fromElement.querySelector(selector);
};
