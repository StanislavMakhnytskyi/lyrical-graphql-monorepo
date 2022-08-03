import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';
import { Song } from './song';
import { Grid } from '@mui/material';

export const GET_SONGS_QUERY = gql`
  {
    songs {
      title
    }
  }
`;

export interface Props {}

export const SongsList: FC<Props> = () => {
  const { loading, error, data } = useQuery(GET_SONGS_QUERY);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Grid container spacing={1} my={5}>
      {data.songs
        ?.filter((song) => song.title)
        .map((song: any, index: number) => (
          <Song key={index} song={song} />
        ))}
    </Grid>
  );
};

export default SongsList;
