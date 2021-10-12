import { ReactNode } from 'react';

export interface PageI {
  children: ReactNode;
  mainContentPadding?: string | number | object;
}
