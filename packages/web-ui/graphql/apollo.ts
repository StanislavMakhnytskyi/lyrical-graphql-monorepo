import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const isServer = typeof window === 'undefined';
const windowApolloState = !isServer && (window.__NEXT_DATA__.apolloState as any);

let APOLLO_CLIENT: ApolloClient<NormalizedCacheObject> | undefined;

export function getApolloClient(forceNew: boolean) {
  if (!APOLLO_CLIENT || forceNew) {
    APOLLO_CLIENT = new ApolloClient({
      ssrMode: isServer,
      uri: 'http://localhost:4000/graphql',
      cache: new InMemoryCache().restore(windowApolloState || {}),
    });
  }

  return APOLLO_CLIENT;
}
