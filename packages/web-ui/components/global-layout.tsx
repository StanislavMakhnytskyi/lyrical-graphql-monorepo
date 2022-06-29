import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const GlobalLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <nav>Global Layout</nav>
      <main>{children}</main>
    </>
  );
};

export default GlobalLayout;
