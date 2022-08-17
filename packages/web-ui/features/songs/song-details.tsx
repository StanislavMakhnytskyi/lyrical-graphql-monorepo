import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import { ISong } from '../../types/types';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';

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
    </Grid>
  );
};
