import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Button from '@mui/material/Button';

export interface Props {
  song: any; // TODO: describe type
  deleteSong: (id: string) => void;
}

export const Song: FC<Props> = ({ song, deleteSong }) => {
  return (
    <Grid item>
      <Card>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {song.title}
          <Button onClick={() => deleteSong(song.id)} variant="outlined" startIcon={<DeleteForeverOutlinedIcon />}>
            Delete
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
