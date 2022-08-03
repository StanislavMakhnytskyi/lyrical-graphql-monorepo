import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export interface Props {
  song: any; // TODO: describe type
}

export const Song: FC<Props> = ({ song }) => {
  return (
    <Grid item>
      <Card>
        <CardContent>{song.title}</CardContent>
      </Card>
    </Grid>
  );
};
