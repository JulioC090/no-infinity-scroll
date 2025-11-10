export interface IStyleConfig {
  styleId?: string;
  selector: string;
}

export interface IStyleManager {
  applyStyle(): void;
  removeStyle(): void;
}
