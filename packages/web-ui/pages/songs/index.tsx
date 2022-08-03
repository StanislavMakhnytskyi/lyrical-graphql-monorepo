import SongsList from '../../features/songs/songs-list';
import { addApolloState, initializeApollo } from '../../graphql/apollo';
import { Page } from '../../types/types';
import fetchSongs from '../../graphql/queries/fetch-songs';

interface Props {}

const SongsPage: Page<Props> = (props) => (
  <>
    <SongsList />
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
