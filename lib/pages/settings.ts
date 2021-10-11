import { currentTab, onSelectChange, onTabChange } from "@lib/tabs";

export interface SettingsSelectI extends onSelectChange, currentTab {}
export interface SettingsTabsI extends onTabChange, currentTab {}
