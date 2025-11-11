import { defineManifest } from '@crxjs/vite-plugin';

import pkg from './package.json';

export default defineManifest({
  manifest_version: 3,
  name: 'No Infinity Scroll',
  version: pkg.version,
  icons: {
    48: 'public/logo.png',
  },
  action: {
    default_icon: {
      48: 'public/logo.png',
    },
  },
  content_scripts: [
    {
      matches: ['https://www.youtube.com/*'],
      js: ['src/content/youtube/index.ts'],
    },
    {
      matches: ['https://www.instagram.com/*'],
      js: ['src/content/instagram/index.ts'],
    },
  ],
});
