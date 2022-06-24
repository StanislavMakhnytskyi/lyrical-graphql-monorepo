import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Song } from './Song';

const GET_SONGS = gql`
  {
    songs {
      title
    }
  }
`;

export const SongList = () => {
  const { loading, error, data } = useQuery(GET_SONGS);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      SongList:
      {data.songs && data.songs.map((song, index) => <Song key={index} song={song} />)}
    </div>
  );
};

export default SongList;
