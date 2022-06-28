import React, { FC } from 'react';

export interface Props {
  song: any; // TODO: describe type
}

export const Song: FC<Props> = ({ song }) => {
  return <li>{JSON.stringify(song)}</li>;
};
