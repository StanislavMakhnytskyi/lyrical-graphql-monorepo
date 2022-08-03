import { FC, ReactNode } from 'react';
import { ResponsiveAppBar } from './index';
import Container from '@mui/material/Container';

interface Props {
  children: ReactNode;
}

export const GlobalLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

export default GlobalLayout;
