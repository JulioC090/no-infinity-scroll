import { IStyleConfig, IStyleManager } from './interfaces/IStyleManager';

export class CommonStyleManager implements IStyleManager {
  private readonly styleId: string;
  private readonly selector: string;

  constructor(config: IStyleConfig) {
    this.styleId = config.styleId ?? 'no-infinity-scroll-style';
    this.selector = config.selector;
  }

  applyStyle(): void {
    if (document.getElementById(this.styleId)) return;

    const style = document.createElement('style');
    style.id = this.styleId;
    style.textContent = `
      ${this.selector} {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  removeStyle(): void {
    const el = document.getElementById(this.styleId);
    if (el) el.remove();
  }
}
