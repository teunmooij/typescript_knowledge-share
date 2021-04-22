import { IFieldResolver, IResolvers } from 'apollo-server'
import IpsumGenerator from 'foobar-ipsum'
import { Context } from './context'
import { Book, OpCo, Query } from './types'

const books: IFieldResolver<Query, Context, { author?: OpCo }> = (
  _,
  { author },
  { dataSources }
): Book[] => {
  return dataSources.bookApi.getBooks(author)
}

const book: IFieldResolver<Query, Context, { bookId: string }> = (
  _,
  { bookId },
  { dataSources }
): Book | undefined => {
  return dataSources.bookApi.getBook(bookId)
}

const content: IFieldResolver<Book, Context> = (): string => {
  const ipsum = new IpsumGenerator()
  return ipsum.paragraph(5)
}

export const resolvers: IResolvers = {
  Query: {
    books,
    book,
  },
  Book: {
    __resolveType: (obj: Book) => `${obj.author}Book`,
  },
  PlantynBook: {
    content,
    alternativeContent: content,
  },
  NoordhoffBook: {
    content,
  },
  LiberBook: {
    content,
  },
}
