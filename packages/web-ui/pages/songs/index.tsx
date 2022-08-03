import SongsList, { GET_SONGS_QUERY } from '../../features/songs/songs-list';
import { addApolloState, initializeApollo } from '../../graphql/apollo';
import { Page } from '../types';

interface Props {}

const SongsPage: Page<Props> = (props) => (
  <>
    <SongsList />
  </>
);

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_SONGS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default SongsPage;
