import { DataSource } from 'apollo-datasource'
import { LiberBook, NoordhoffBook, OpCo, PlantynBook } from './types'

export class BookApi extends DataSource {
  getBooks = (opco?: OpCo) =>
    books.filter((book) => !opco || book.author === opco)

  getBook = (id: string) => books.find((book) => book.id === id)
}

const books: (PlantynBook | LiberBook | NoordhoffBook)[] = [
  {
    id: '123',
    title: 'Refset NU SE content Edify to new content model',
    author: 'Noordhoff',
  },
  {
    id: '456',
    title: 'Spektrum Fysik',
    author: 'Liber',
    imageSrc: 'https://liber.se/covers/XL/4708596o.jpg',
  },
  {
    id: '789',
    title: 'SOS Historia 7-9',
    author: 'Liber',
    imageSrc: 'https://liber.se/covers/XL/4712657o.jpg',
  },
  {
    id: '0qw',
    title: 'Liber Svenska 7-9',
    author: 'Liber',
    imageSrc: 'https://liber.se/covers/XL/4713398o.jpg',
  },
  {
    id: 'ert',
    title: 'Mucho Mas 8',
    author: 'Liber',
    imageSrc: 'https://liber.se/covers/XL/4713079o.jpg',
  },
  {
    id: 'yui',
    title: 'Overal 5 vwo (5e ed) test chapter new chain',
    author: 'Noordhoff',
  },
  {
    id: 'opa',
    title: 'Good Stuff Gold B',
    author: 'Liber',
    imageSrc: 'https://liber.se/covers/XL/4709241o.jpg',
  },
  {
    id: 'sdf',
    title: 'Refset Plantyn SE - New Content Model',
    author: 'Plantyn',
  },
  {
    id: 'ghj',
    title: 'Nectar 3 gt - Test chapter new chain',
    author: 'Noordhoff',
  },
  {
    id: 'klz',
    title: 'Getal en Ruimte vmbo-b test chapter new chain',
    author: 'Noordhoff',
    imageSrc:
      'https://images.ctfassets.net/huogrpkfou0w/3VFZA220Zim9mkta9ZYiGP/6853b36da52eba16459c290fa17b1f9f/9789001888794.png',
  },
  {
    id: 'xcv',
    title: 'Moderne Wiskunde havo A deel 3 (12e Ed.) - test chapter new chain',
    author: 'Noordhoff',
    imageSrc:
      'https://images.ctfassets.net/huogrpkfou0w/2PzCNlADQPIBQDk8q6krjb/88b9179c782e0d1f8d4f3061dfb4df8d/9789001882662.png',
  },
  {
    id: 'bnm',
    title: 'Pincode 3GT test chapter new chain',
    author: 'Noordhoff',
  },
  {
    id: '234',
    title: 'Trabitour 3 vmbo-bk (4e ed.) test chapter new chain',
    author: 'Noordhoff',
  },
  {
    id: '567',
    title: 'NU Rekenen 3e editie - Test chapter new chain',
    author: 'Noordhoff',
  },
]
