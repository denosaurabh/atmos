import { ReactNode } from 'react';
import UIStore from '@stores/uiStore';

export interface PageI {
  children: ReactNode;
  mainContentPadding?: string | number | object;
  store: UIStore;
}
