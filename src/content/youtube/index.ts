import { CommonStyleManager } from '../shared/CommonStyleManager';
import { ContentManager } from '../shared/ContentManager';

const shortsStyleConfig = {
  styleId: 'no-infinity-shorts-controls-style',
  selector: 'div.navigation-container.style-scope.ytd-shorts',
};

const styleManager = new CommonStyleManager(shortsStyleConfig);

const contentManager = new ContentManager({
  pathPattern: '/shorts',
  styleManager,
});

contentManager.start();
