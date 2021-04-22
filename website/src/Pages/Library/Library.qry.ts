import gql from "graphql-tag";

export const libraryQuery = gql`
  query books($author: OpCo) {
    books(author: $author) {
      id
      title
      author
    }
  }
`;
