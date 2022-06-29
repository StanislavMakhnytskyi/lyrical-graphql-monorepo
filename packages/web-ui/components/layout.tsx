import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <nav>Local Layout</nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
