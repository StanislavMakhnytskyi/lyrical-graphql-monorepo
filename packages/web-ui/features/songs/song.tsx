import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { ISong } from '../../types';

export interface Props {
  song: ISong;
  deleteSong: (id: string) => void;
}

export const Song: FC<Props> = ({ song, deleteSong }) => {
  const router = useRouter();
  return (
    <Grid item xs={6}>
      <Card>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span onClick={() => router.push(`${router.asPath}/${song.id}`)}>{song.title}</span>
          <Button onClick={() => deleteSong(song.id)} variant="outlined" startIcon={<DeleteForeverOutlinedIcon />}>
            Delete
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
