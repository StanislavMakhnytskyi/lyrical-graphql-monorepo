import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Song } from './song';
import { Grid } from '@mui/material';
import fetchSongs from '../../graphql/queries/fetch-songs';

interface Song {
  id: number;
  title: string;
}

interface SongsData {
  songs: Song[];
}

export interface Props {}

export const SongsList: FC<Props> = () => {
  const { loading, error, data } = useQuery<SongsData>(fetchSongs);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Grid container spacing={1} my={5}>
      {data?.songs
        ?.filter((song) => song.title)
        .map((song: any, index: number) => (
          <Song key={index} song={song} />
        ))}
    </Grid>
  );
};

export default SongsList;
