import { CommonBlockManager } from '../CommonBlockManager';
import { IBlockManager } from './IBlockManager';
import { IStyleManager } from './IStyleManager';

export interface IContentManagerConfig {
  pathPattern: string;
  styleManager?: IStyleManager;
  blockManager?: IBlockManager;
}

export const defaultBlockManager = new CommonBlockManager();
