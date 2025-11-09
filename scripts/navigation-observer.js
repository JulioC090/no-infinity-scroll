function createNavigationHandler(pathPattern, onMatch, onNoMatch) {
  function handleNavigation() {
    if (location.pathname.startsWith(pathPattern)) {
      onMatch();
    } else {
      onNoMatch();
    }
  }

  return handleNavigation;
}

function observeNavigation(handleNavigation) {
  let lastPath = location.pathname;
  
  new MutationObserver(() => {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      handleNavigation();
    }
  }).observe(document.body, { childList: true, subtree: true });

  // Execute handler on initial load
  handleNavigation();
}