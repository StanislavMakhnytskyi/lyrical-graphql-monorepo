import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { ISong } from '../../types';
import { CreateLyrics } from '../lyrics/create-lyrics';
import Lyrics from '../lyrics/lyrics';

export interface Props {
  song: ISong;
}

export const SongDetails: FC<Props> = ({ song }) => {
  const { back } = useRouter();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button sx={{ my: 1 }} onClick={back} variant="outlined" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">{song.title}</Typography>
      </Grid>
      <Grid item lg={4} xs={12} wrap="nowrap">
        <Lyrics lyrics={song.lyrics} />
      </Grid>
      <Grid item lg={8} />
      <Grid item lg={4}>
        <Divider sx={{ mt: 3 }} />
        <CreateLyrics />
      </Grid>
    </Grid>
  );
};
