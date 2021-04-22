/* eslint-disable @typescript-eslint/no-unused-vars */

// Hover with your mouse over the types to see their final structure

type OpCo = 'Noordhoff' | 'Liber' | 'Plantyn'

export type TextBook = {
  id: string
  title: string
  author: OpCo
  content?: string
}

// Records
type Settings = Record<string, string>
type BestSellers = Record<OpCo, TextBook>
type EmptyObject = Record<string, never>

// Pick some props
type MultiLingualAuthors = Extract<OpCo, 'Plantyn'>
type SingleLanguageAuthors = Exclude<OpCo, 'Plantyn'>
type AlsoSingleLanguageAuthors = Extract<OpCo, 'Noordhoff' | 'Liber'>

type BookTitle = Pick<TextBook, 'id' | 'title'>
type EmptyBook = Omit<TextBook, 'content'>

// Change some types
type Maybe<T> = T | null | undefined

type MaybeString = Maybe<string>
type CertainlyString = NonNullable<MaybeString>

// Change some props
type PartialBook = Partial<TextBook>
type BookWithContent = Required<TextBook>
type PictureBook = Pick<TextBook, 'id' | 'title'> &
  Partial<Pick<TextBook, 'author'>> & {
    images: { title: string; src: string }[]
  }
type Dictionary<T> = Partial<Record<string, T>>

// Extract props from functions
type myFunction = (
  param1: string,
  param2: number,
  ...args: (string | number)[]
) => boolean

type myParams = Parameters<myFunction>
type myReturnType = ReturnType<myFunction>

/* For practical examples, see: 
    - locales.ts 
    - 'useQuery' in BookSelect.tsx
    - NoordhoffBookWithCover in Model.ts
*/
