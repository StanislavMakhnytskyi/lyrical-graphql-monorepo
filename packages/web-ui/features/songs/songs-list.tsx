import React, { FC } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Song } from './song';
import { Grid } from '@mui/material';
import fetchSongs from '../../graphql/queries/fetch-songs';
import deleteSong from '../../graphql/queries/delete-song';

interface ISong {
  id: number;
  title: string;
}

interface ISongsData {
  songs: ISong[];
}

export interface Props {}

export const SongsList: FC<Props> = () => {
  const { loading, error, data } = useQuery<ISongsData>(fetchSongs);
  const [deleteSongMutation] = useMutation(deleteSong);
  const deleteSongCallback = async (id: string) => {
    await deleteSongMutation({ variables: { id }, refetchQueries: [{ query: fetchSongs }] });
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Grid container spacing={1} my={5}>
      {data?.songs
        ?.filter((song) => song.title)
        .map((song: any, index: number) => (
          <Song key={index} song={song} deleteSong={deleteSongCallback} />
        ))}
    </Grid>
  );
};

export default SongsList;
