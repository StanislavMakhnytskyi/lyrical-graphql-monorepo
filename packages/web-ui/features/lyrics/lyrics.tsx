import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

import { ILyric } from '../../types';

export interface Props {
  lyrics?: ILyric[];
}

export const Lyrics: FC<Props> = ({ lyrics }) => {
  if (!lyrics) return null;

  return (
    <>
      {lyrics.map((lyric) => (
        <Typography sx={{ display: 'flex' }} key={lyric.id} variant="h5">
          {lyric.content}
        </Typography>
      ))}
    </>
  );
};

export default Lyrics;
