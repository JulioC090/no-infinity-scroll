export interface IBlockManager {
  block(): void;
  unblock(): void;
}

export interface IBlockEventHandler {
  target: EventTarget;
  type: string;
  fn: EventListener;
  options: boolean | AddEventListenerOptions;
}
