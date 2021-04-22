import gql from 'graphql-tag'

export const detailsQuery = gql`
  query details($bookId: ID!) {
    book(bookId: $bookId) {
      id
      title
      author
      content
      ... on PlantynBook {
        alternativeContent
      }
      ... on LiberBook {
        imageSrc
      }
      ... on NoordhoffBook {
        imageSrc
      }
    }
  }
`

export const booksQuery = gql`
  query authorBooks($author: OpCo) {
    books(author: $author) {
      id
      title
    }
  }
`
