import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

import { ILyric } from '../../types';

export interface Props {
  lyrics?: ILyric[];
}

export const Lyrics: FC<Props> = ({ lyrics }) => {
  if (!lyrics) return null;

  return (
    <Stack spacing={1}>
      {lyrics.map((lyric) => (
        <Paper key={lyric.id} sx={{ p: 2 }}>
          <Typography sx={{ display: 'flex' }} variant="h5">
            {lyric.content}
          </Typography>
        </Paper>
      ))}
    </Stack>
  );
};

export default Lyrics;
