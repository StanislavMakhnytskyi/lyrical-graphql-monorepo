import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';

import { SongDetails } from '../../features/songs/song-details';
import { addApolloState, initializeApollo } from '../../graphql/apollo';
import { fetchSong, fetchSongs } from '../../graphql/queries';
import { IPage, ISong } from '../../types';

interface ISongData {
  song: ISong;
}

interface Props {}

const SongPage: IPage<Props> = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery<ISongData>(fetchSong, {
    variables: { id: router.query.id },
    fetchPolicy: 'cache-first',
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <SongDetails song={data?.song as ISong}></SongDetails>
    </>
  );
};

export async function getStaticProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: fetchSong,
    variables: {
      id,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
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
