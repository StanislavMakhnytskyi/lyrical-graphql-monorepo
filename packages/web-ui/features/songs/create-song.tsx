import React, { FC } from 'react';
import { useFormik } from 'formik';
import { gql, useMutation } from '@apollo/client';

export interface Props {}

interface CreateSongFormConfig {
  songTitle: string;
}

const createSong = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export const CreateSong: FC<Props> = () => {
  const [addSongMutation] = useMutation(createSong);

  const formik = useFormik<CreateSongFormConfig>({
    initialValues: {
      songTitle: '',
    },
    onSubmit: (values) => {
      debugger;
      addSongMutation({ variables: { title: values.songTitle } });
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
