const STYLE_ID = 'no-infinity-shorts-controls-style';

function applyShortsControlsStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    div.navigation-container.style-scope.ytd-shorts {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}

function removeShortsControlsStyle() {
  const el = document.getElementById(STYLE_ID);
  if (el) el.remove();
}

const handleNavigation = createNavigationHandler(
  '/shorts',
  function onMatch() { blockScroll(); applyShortsControlsStyle(); },
  function onNoMatch() { unblockScroll(); removeShortsControlsStyle(); }
);

observeNavigation(handleNavigation);
