import { gql } from '@apollo/client';

export default gql`
  query fetchSong($id: ID!) {
    song(id: $id) {
      title
      lyrics {
        content
        id
      }
    }
  }
`;
