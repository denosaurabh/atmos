import { ReactNode, SetStateAction, Dispatch } from "react";

export interface CarousalIndexI {
  gap: number;
  children: ReactNode[];
}

export interface setActiveItemI {
  setActiveItem: Dispatch<SetStateAction<number>>;
}

export interface CarousalIncrementerI extends setActiveItemI {
  activeItem: number;
  constraint: number;
  positions: number[];
}

export interface CarousalItemI extends setActiveItemI {
  setTrackIsActive: (boolean) => void;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  children: ReactNode;
  index: number;
  gap: number;
}

export interface CarousalTrackI extends setActiveItemI {
  setTrackIsActive: (boolean) => void;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  children: ReactNode;
  index?: number;
  gap: number;
  trackIsActive: boolean;
  multiplier: number;
}

export interface CarousalSliderI {
  children: ReactNode;
  initSliderWidth: (number) => void;
  gap: number;
}
