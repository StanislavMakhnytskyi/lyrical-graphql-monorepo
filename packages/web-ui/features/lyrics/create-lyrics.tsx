import { useMutation } from '@apollo/client';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import createLyrics from '../../graphql/queries/create-lyrics';
import fetchSong from '../../graphql/queries/fetch-songs';

export interface Props {}

interface CreateLyricFormConfig {
  lyricTitle: string;
}

export const CreateLyrics: FC<Props> = () => {
  const [addLyricsMutation] = useMutation(createLyrics);
  const router = useRouter();

  const formik = useFormik<CreateLyricFormConfig>({
    initialValues: {
      lyricTitle: '',
    },
    onSubmit: async (values) => {
      await addLyricsMutation({
        variables: { content: values.lyricTitle, songId: router.query.id },
        refetchQueries: [{ query: fetchSong }],
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl sx={{ my: 2 }}>
        <TextField
          name="lyricTitle"
          type="text"
          size="small"
          label="Add a Lyric"
          onChange={formik.handleChange}
          value={formik.values.lyricTitle}
        />
        <Button sx={{ my: 1 }} variant="outlined" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};
