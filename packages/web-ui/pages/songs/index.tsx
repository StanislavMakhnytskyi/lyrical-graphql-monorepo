import SongsList, { GET_SONGS_QUERY } from '../../features/songs/songs-list';
import { addApolloState, initializeApollo } from '../../graphql/apollo';
import { Layout } from '../../components';
import { Page } from '../types';

interface Props {}

const SongsPage: Page<Props> = (props) => (
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

SongsPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default SongsPage;
