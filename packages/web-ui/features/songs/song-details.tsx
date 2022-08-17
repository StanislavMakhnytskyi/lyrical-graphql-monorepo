import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { ISong } from '../../types/types';
import { CreateLyrics } from '../lyrics/create-lyrics';

export interface Props {
  song: ISong;
}

export const SongDetails: FC<Props> = ({ song }) => {
  const { back } = useRouter();

  return (
    <Grid>
      <Grid item xs={12}>
        <Button sx={{ my: 1 }} onClick={back} variant="outlined" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="h3">{song.title}</Typography>
      </Grid>
      {song.lyrics && (
        <Grid item>
          {song.lyrics.map((lyric, index) => (
            <Typography key={index} variant="h5">
              {lyric.content}
            </Typography>
          ))}
        </Grid>
      )}
      <Grid item>
        <CreateLyrics></CreateLyrics>
      </Grid>
    </Grid>
  );
};
