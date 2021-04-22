import { BookApi } from './bookApi'

export interface DataSources {
  bookApi: BookApi
}

export interface Context {
  dataSources: DataSources
}

export const dataSources = () => ({
  bookApi: new BookApi(),
})
