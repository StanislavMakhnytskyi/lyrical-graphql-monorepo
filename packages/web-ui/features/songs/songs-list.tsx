import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Song } from './song';

export const GET_SONGS_QUERY = gql`
  {
    songs {
      title
    }
  }
`;

export interface Props {}

export const SongsList: FC<Props> = () => {
  const { loading, error, data } = useQuery(GET_SONGS_QUERY);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      SongList:
      {data.songs && data.songs.map((song: any, index: number) => <Song key={index} song={song} />)}
    </div>
  );
};

export default SongsList;
