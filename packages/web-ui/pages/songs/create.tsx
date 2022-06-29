import { CreateSong } from '../../features/songs/create-song';
import { Layout } from '../../components';
import { Page } from '../types';

const CreateSongPage: Page = (props) => (
  <>
    <h3>CreateSongPage</h3>
    <CreateSong />
  </>
);

CreateSongPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CreateSongPage;
