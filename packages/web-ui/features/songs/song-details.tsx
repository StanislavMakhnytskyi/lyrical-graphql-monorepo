import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import { ISong } from '../../types/types';

export interface Props {
  song: ISong;
}

export const SongDetails: FC<Props> = ({ song }) => {
  return (
    <Grid>
      <Grid item>Title: {song.title}</Grid>
    </Grid>
  );
};
