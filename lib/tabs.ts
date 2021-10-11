import { ChangeEvent } from "react";

export interface currentTab {
  currentTab: number;
}

export interface onSelectChange {
  onSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface onTabChange {
  onTabChange: (index: number) => void;
}
