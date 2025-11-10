import { CommonStyleManager } from '../shared/CommonStyleManager';
import { ContentManager } from '../shared/ContentManager';

const reelsStyleConfig = {
  styleId: 'no-infinity-reels-controls-style',
  selector: '[aria-label="Reels navigation controls"]',
};

const styleManager = new CommonStyleManager(reelsStyleConfig);

const contentManager = new ContentManager({
  pathPattern: '/reels',
  styleManager,
});

contentManager.start();
