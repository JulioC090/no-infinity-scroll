const REELS_STYLE_ID = 'no-infinity-reels-controls-style';

function applyReelsControlsStyle() {
	if (document.getElementById(REELS_STYLE_ID)) return;
	const style = document.createElement('style');
	style.id = REELS_STYLE_ID;
	style.textContent = `
		[aria-label="Reels navigation controls"] {
			display: none !important;
		}
	`;
	document.head.appendChild(style);
}

function removeReelsControlsStyle() {
	const el = document.getElementById(REELS_STYLE_ID);
	if (el) el.remove();
}

const instagramHandleNavigation = createNavigationHandler(
	'/reels',
	function onMatch() { blockScroll(); applyReelsControlsStyle(); },
	function onNoMatch() { unblockScroll(); removeReelsControlsStyle(); }
);

observeNavigation(instagramHandleNavigation);

