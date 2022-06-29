import { ApolloProvider } from '@apollo/react-hooks';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { Page } from './types';
import { useApollo } from '../graphql/apollo';
import GlobalLayout from '../components/global-layout';

type Props = AppProps & {
  Component: Page;
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
