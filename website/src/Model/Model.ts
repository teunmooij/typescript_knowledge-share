export type OpCo = 'Noordhoff' | 'Liber' | 'Plantyn'

export interface Book {
  id: string
  title: string
  author: OpCo
  content?: string
}

export interface PlantynBook extends Book {
  alternativeContent: string
}

export interface LiberBook extends Book {
  imageSrc: string
}

export interface NoordhoffBook extends Book {
  imageSrc?: string
}

export interface Query {
  books: Book[]
  book?: Book
}

export const isPlantynBook = (book: Book): book is PlantynBook =>
  book.author === 'Plantyn'

export const isLiberBook = (book: Book): book is LiberBook =>
  book.author === 'Liber'

export const isNoordhoffBook = (book: Book): book is NoordhoffBook =>
  book.author === 'Noordhoff'

type NoordhoffBookWithCover = NoordhoffBook &
  Required<Pick<NoordhoffBook, 'imageSrc'>>

export const hasCover = (
  book: Book
): book is LiberBook | NoordhoffBookWithCover =>
  isLiberBook(book) || (isNoordhoffBook(book) && Boolean(book.imageSrc))
