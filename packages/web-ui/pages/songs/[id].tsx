import { addApolloState, initializeApollo } from '../../graphql/apollo';
import { ISong, IPage } from '../../types/types';
import { fetchSong, fetchSongs } from '../../graphql/queries';
import { SongDetails } from '../../features/songs/song-details';

interface Props {
  song: ISong;
}

const SongPage: IPage<Props> = (props) => (
  <>
    <SongDetails song={props.song}></SongDetails>
  </>
);

export async function getStaticProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: fetchSong,
    variables: {
      id,
    },
  });

  return addApolloState(apolloClient, {
    props: { song: data.song },
  });
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: fetchSongs,
  });
  const paths = data.songs.map((song: ISong) => ({
    params: { id: song.id },
  }));

  return { paths, fallback: false };
}

export default SongPage;
