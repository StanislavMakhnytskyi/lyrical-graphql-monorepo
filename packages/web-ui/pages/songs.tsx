import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import SongList from "../features/songs/song-list";

const Songs: NextPage = () => {
  return (
    <div className={styles.container}>
      <SongList/>
    </div>
  )
}

export default Songs
