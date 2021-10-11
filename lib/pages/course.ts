import { UserI } from '@lib/user';

export interface TopLeftDataI {
  title: string;
  instructor: UserI;
  subDescription: string;
  learners_number: number;
}

export interface BottomContentI {
  description: string;
  inside: string[];
  requirnments: string[];
  content: object;
}
