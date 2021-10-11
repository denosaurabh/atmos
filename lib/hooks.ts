export interface useTabsHookI {
  changeAt: 'xs' | 'sm' | 'sl' | 'md' | 'lg' | 'ml' | 'xl' | 'xxl';
  options?: Record<string, JSX.Element> | undefined;
}

export interface RectDimensionsI {
  width: number;
  height: number;
  top: number;
  left: number;
  x: number;
  y: number;
  right: number;
  bottom: number;
}
