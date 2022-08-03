import React, { FC } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client';
import fetchSongs from '../../graphql/queries/fetch-songs';
import createSong from '../../graphql/queries/create-song';

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
      <label htmlFor="song.title">Song Title:</label>
      <input
        id="songTitle"
        name="songTitle"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.songTitle}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
