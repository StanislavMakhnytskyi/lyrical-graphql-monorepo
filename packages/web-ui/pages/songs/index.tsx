import Songs from '../../features/songs/songs';
import { addApolloState, initializeApollo } from '../../graphql/apollo';
import fetchSongs from '../../graphql/queries/fetch-songs';
import { IPage } from '../../types/types';

interface Props {}

const SongsPage: IPage<Props> = (props) => (
  <>
    <Songs />
  </>
);

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: fetchSongs,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default SongsPage;
