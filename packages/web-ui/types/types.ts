import { NextPage } from 'next';
import { ReactNode } from 'react';

export type IPage<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export interface ISong {
  id: string;
  title: string;
}
