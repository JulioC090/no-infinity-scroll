import { IBlockEventHandler, IBlockManager } from './interfaces/IBlockManager';

export class CommonBlockManager implements IBlockManager {
  private listeners: IBlockEventHandler[] = [];
  private blocked: boolean = false;

  private createHandlers(): IBlockEventHandler[] {
    return [
      {
        target: globalThis,
        type: 'wheel',
        fn: (e: Event) => e.preventDefault(),
        options: { passive: false },
      },
      {
        target: globalThis,
        type: 'touchmove',
        fn: (e: Event) => e.preventDefault(),
        options: { passive: false },
      },
      {
        target: globalThis,
        type: 'scroll',
        fn: () => globalThis.scrollTo(0, 0),
        options: { passive: false },
      },
      {
        target: globalThis,
        type: 'keydown',
        fn: (e: Event) => {
          const event = e as KeyboardEvent;
          const blocked = [
            'ArrowUp',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'Space',
            'PageUp',
            'PageDown',
            'Home',
            'End',
          ];
          if (blocked.includes(event.code)) {
            event.stopImmediatePropagation();
            event.preventDefault();
          }
        },
        options: true,
      },
    ];
  }

  block(): void {
    if (this.blocked) return;
    this.blocked = true;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const handlers = this.createHandlers();

    for (const h of handlers) {
      h.target.addEventListener(h.type, h.fn, h.options);
      this.listeners.push(h);
    }
  }

  unblock(): void {
    if (!this.blocked) return;
    this.blocked = false;

    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    for (const h of this.listeners) {
      h.target.removeEventListener(h.type, h.fn, h.options);
    }
    this.listeners = [];
  }
}
