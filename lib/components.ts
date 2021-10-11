import {
  ChangeEvent,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
} from 'react';
import { OwnerI, UserI } from '@lib/user';
import { onSelectChange, onTabChange } from '@lib/tabs';
import { ChakraProps } from '@chakra-ui/system';
import { useUII } from '@contexts/useUI';

export interface CategoryI {
  image: string;
  title: string;
  description: string;
}

export interface CourseBoxI {
  id: string;
  image: string;
  title: string;
  instructor: OwnerI;
  learners_number: number;
  price: number;
  reviews_number: number;
  tags: string[];
}

export interface CourseCardI {
  id: string;
  image: string;
  title: string;
  instructor: OwnerI;
  learners_number: number;
  // price: number;
  tags: string[];
}

export interface CourseMainBoxI {
  id: string;
  image: string;
  title: string;
  instructor: OwnerI;
  tags: string[];
}

export interface HeaderI {
  breakpointForResSidebar: string[];
  paddingLeft: number;
  ui: useUII;
}

export interface InputI {
  name: string;
  isRequired?: boolean;
  placeHolder: string;
  label: string;
  type: string;
  value: string | number | readonly string[] | undefined;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  [key: string]: unknown;
}

export interface MenuTabI {
  changeAt: 'xs' | 'sm' | 'sl' | 'md' | 'lg' | 'ml' | 'xl' | 'xxl';
  options?: Record<string, JSX.Element>;
}

export interface MenuPropsI {
  currentTab: number;
  tabsContent: JSX.Element[];
  options: string[];
}

export interface SelectMenuI extends MenuPropsI, onSelectChange {}

export interface TabsMenuI extends MenuPropsI, onTabChange {}

export interface HeaderI {
  paddingLeft: number;
  breakpointForResSidebar: string[];
}

export interface MyCourseBoxI {
  title: string;
  image: string;
}

export interface SidebarExtended {
  extended: boolean;
}

export interface SidebarBreakpoint {
  breakpointForResSidebar: string[];
}

export interface NavButtonI extends SidebarExtended {
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  link: string;
  children?: string;
  notifications?: number;
  mb?: string | number;
  [key: string]: unknown;
}

export interface NotificationIconI extends ChakraProps {
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  number: number;
}

export interface NumberI {
  children: string;
  colorScheme: string;
}

export interface PageHeadingI {
  text: string;
  title: string;
}

export interface QuestionI {
  title: string;
  description: string;
  timestamp: { seconds: string };
  from: { avatar: string; userId: string; userName: string };
  answers: Record<string, unknown>[];
  noLeftIcons: boolean;
  noHeading: boolean;
}

export interface SidebarI extends SidebarBreakpoint {
  extendedWidth: number;
  smallWidth: number;
  courseLearningWidth: number;
  ui: useUII;
}

export interface SidebarHeaderI extends SidebarExtended, SidebarBreakpoint {
  toggleExtended: () => void;
}

export interface SidebarSectionsContainerI {
  title: string;
  children: ReactNode;
}

export interface FeedsSectionI extends SidebarExtended {
  isUser: boolean;
  user: UserI | null;
}

export interface UserCompI extends UserI {
  size: 'base' | 'small';
}
