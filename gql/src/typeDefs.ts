import { gql } from 'apollo-server'

export const typeDefs = gql`
  interface Book {
    id: ID!
    title: String!
    author: String
    content: String
  }

  type PlantynBook implements Book {
    id: ID!
    title: String!
    author: String
    content: String
    alternativeContent: String
  }

  type LiberBook implements Book {
    id: ID!
    title: String!
    imageSrc: String
    author: String
    content: String
  }

  type NoordhoffBook implements Book {
    id: ID!
    title: String!
    imageSrc: String
    author: String
    content: String
  }

  enum OpCo {
    Noordhoff
    Liber
    Plantyn
  }

  type Query {
    books(author: OpCo): [Book!]!
    book(bookId: ID!): Book
  }
`
