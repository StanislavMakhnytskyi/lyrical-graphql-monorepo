import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Song } from './song';

const GET_SONGS = gql`
  {
    songs {
      title
    }
  }
`;

export interface Props {}

export const SongList: FC<Props> = () => {
  const { loading, error, data } = useQuery(GET_SONGS);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      SongList:
      {data.songs && data.songs.map((song: any, index: number) => <Song key={index} song={song} />)}
    </div>
  );
};

export default SongList;
