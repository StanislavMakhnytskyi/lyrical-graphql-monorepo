import { NextPage } from 'next';
import SongsList, { GET_SONGS_QUERY } from '../../features/songs/songs-list';
import { addApolloState, initializeApollo } from '../../graphql/apollo';

const CreateSongPage: NextPage = (props) => (
  <>
    <h3>CreateSongPage</h3>
    {JSON.stringify(props)}
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

export default CreateSongPage;
