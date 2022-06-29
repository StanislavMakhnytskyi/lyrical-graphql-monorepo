import { NextPage } from 'next';
import { addApolloState, initializeApollo } from '../../graphql/apollo';
import { CreateSong } from '../../features/songs/create-song';

const CreateSongPage: NextPage = (props) => (
  <>
    <h3>CreateSongPage</h3>
    <CreateSong />
  </>
);

// export async function getServerSideProps() {
//   const apolloClient = initializeApollo();
//
//   await apolloClient.query({
//     query: GET_SONGS_QUERY,
//   });
//
//   return addApolloState(apolloClient, {
//     props: {},
//   });
// }

export default CreateSongPage;
