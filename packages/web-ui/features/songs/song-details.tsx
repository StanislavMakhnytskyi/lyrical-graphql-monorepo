import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { ISong } from '../../types/types';

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
