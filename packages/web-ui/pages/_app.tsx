import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../graphql/apollo';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
