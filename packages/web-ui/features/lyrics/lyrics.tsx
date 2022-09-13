import { useMutation } from '@apollo/client';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { FC, useCallback } from 'react';

import likeLyric from '../../graphql/queries/like-lyric';
import { ILyric } from '../../types';

export interface Props {
  lyrics?: ILyric[];
}

export const Lyrics: FC<Props> = ({ lyrics }) => {
  const [likeLyricMutation] = useMutation(likeLyric);
  const handleLikeLyric = useCallback(
    (id: ILyric['id'], likes: ILyric['likes']) => () => {
      likeLyricMutation({
        variables: { id },
        optimisticResponse: {
          __typename: 'Mutation',
          likeLyric: {
            __typename: 'LyricType',
            id,
            likes: likes + 1,
          },
        },
      });
    },
    [likeLyricMutation]
  );

  if (!lyrics) return null;

  return (
    <Stack spacing={1}>
      {lyrics.map((lyric) => (
        <Paper key={lyric.id} sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ display: 'flex' }} variant="h5">
            {lyric.content}
          </Typography>
          <Box sx={{ display: 'flex', 'align-items': 'center' }}>
            <IconButton onClick={handleLikeLyric(lyric.id, lyric.likes)} aria-label="thumb-up">
              <ThumbUpIcon />
            </IconButton>
            <Box sx={{ pl: 1 }}>{lyric.likes}</Box>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default Lyrics;
