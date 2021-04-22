export type OpCo = 'Noordhoff' | 'Liber' | 'Plantyn'

export interface Book {
  id: string
  title: string
  author: OpCo
  content?: string
}

export interface PlantynBook extends Book {
  alternativeContent?: string
}

export interface LiberBook extends Book {
  imageSrc: string
}

export interface NoordhoffBook extends Book {
  imageSrc?: string
}

export interface Query {
  books: Book[]
}
