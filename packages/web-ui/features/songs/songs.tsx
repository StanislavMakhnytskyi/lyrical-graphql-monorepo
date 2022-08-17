import { useMutation, useQuery } from '@apollo/client';
import { Grid } from '@mui/material';
import React, { FC } from 'react';

import deleteSong from '../../graphql/queries/delete-song';
import fetchSongs from '../../graphql/queries/fetch-songs';
import { ISong } from '../../types/types';
import { Song } from './song';

interface ISongsData {
  songs: ISong[];
}

export interface Props {}

export const Songs: FC<Props> = () => {
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

export default Songs;
