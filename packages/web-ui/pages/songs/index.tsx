import { NextPage } from 'next';
import SongsList, { GET_SONGS_QUERY } from '../../features/songs/songs-list';
import { addApolloState, initializeApollo } from '../../graphql/apollo';

const SongsPage: NextPage = (props) => (
  <>
    {JSON.stringify(props)}

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
