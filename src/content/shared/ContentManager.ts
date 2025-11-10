import { IBlockManager } from './interfaces/IBlockManager';
import {
  defaultBlockManager,
  IContentManagerConfig,
} from './interfaces/IContentManager';
import { IStyleManager } from './interfaces/IStyleManager';

export class ContentManager {
  private observer: MutationObserver | null = null;
  private lastPath: string = location.pathname;
  private readonly pathPattern: string;
  private readonly styleManager?: IStyleManager;
  private readonly blockManager: IBlockManager;

  constructor(config: IContentManagerConfig) {
    this.pathPattern = config.pathPattern;
    this.styleManager = config.styleManager;
    this.blockManager = config.blockManager ?? defaultBlockManager;
  }

  private handleNavigation(): void {
    if (location.pathname.startsWith(this.pathPattern)) {
      this.onMatch();
    } else {
      this.onNoMatch();
    }
  }

  private onMatch(): void {
    this.blockManager.block();
    this.styleManager?.applyStyle();
  }

  private onNoMatch(): void {
    this.blockManager.unblock();
    this.styleManager?.removeStyle();
  }

  start(): void {
    this.observer = new MutationObserver(() => {
      if (location.pathname !== this.lastPath) {
        this.lastPath = location.pathname;
        this.handleNavigation();
      }
    });

    this.observer.observe(document.body, { childList: true, subtree: true });

    this.handleNavigation();
  }

  stop(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.blockManager.unblock();
    this.styleManager?.removeStyle();
  }
}
