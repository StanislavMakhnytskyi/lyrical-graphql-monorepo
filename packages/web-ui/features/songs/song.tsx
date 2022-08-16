import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Button from '@mui/material/Button';
import { ISong } from '../../types/types';

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
