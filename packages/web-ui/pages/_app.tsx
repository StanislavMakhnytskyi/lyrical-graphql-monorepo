import { ApolloProvider } from '@apollo/react-hooks';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';

import GlobalLayout from '../components/global-layout';
import { useApollo } from '../graphql/apollo';
import { IPage } from '../types/types';

type Props = AppProps & {
  Component: IPage;
};

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  const apolloClient = useApollo(pageProps);

  return (
    <GlobalLayout>
      {getLayout(
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      )}
    </GlobalLayout>
  );
};

export default App;
