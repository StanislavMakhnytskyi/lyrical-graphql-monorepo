import { useMutation } from '@apollo/client';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import createSong from '../../graphql/queries/create-song';
import fetchSongs from '../../graphql/queries/fetch-songs';

export interface Props {}

interface CreateSongFormConfig {
  songTitle: string;
}

export const CreateSong: FC<Props> = () => {
  const [addSongMutation] = useMutation(createSong);
  const router = useRouter();

  const formik = useFormik<CreateSongFormConfig>({
    initialValues: {
      songTitle: '',
    },
    onSubmit: async (values) => {
      await addSongMutation({ variables: { title: values.songTitle }, refetchQueries: [{ query: fetchSongs }] });
      await router.push('/songs');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl sx={{ my: 2 }}>
        <TextField
          name="songTitle"
          type="text"
          size="small"
          label="Song title"
          onChange={formik.handleChange}
          value={formik.values.songTitle}
        />

        <Button sx={{ my: 1 }} variant="outlined" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};
