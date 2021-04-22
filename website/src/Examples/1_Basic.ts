/* eslint-disable @typescript-eslint/no-unused-vars */

// Primitives
const bool: boolean = true
const num: number = 3
const str: string = 'hello'

// Other basis types
const array: number[] = [1, 2, 3]
const something: any = 'hello again'

// Functions
function print(value: string): void {
  console.log(value)
}

const log = (value: string): void => console.log(value)

// Object
const obj = { bool: true, num: 3, str: 'hello' }

// Types and interfaces
type myType = {
  bool: boolean
  num?: number
  str: string
} // alias

interface myInterface {
  bool: boolean
  num: number
} // declaration

interface myInterface {
  str: string
} // extension

// Enums and unions
enum myEnum {
  optionA = 'A',
  optionB = 'B',
  optionC = 'C',
}

type literal = 'Hello'

type myUnion = 'A' | 'B' | 'C'

type myOtherUnion = true | number | myUnion

// Other
export type others = null | undefined | unknown | never
// All other javascript types are supported (NaN, bigint,...)

// Type Assertions
type NamedFunction = {
  (name: string): void
  name: string
}

const myNamedFunction = ((name: string) =>
  console.log(`hello ${name}!`)) as NamedFunction
myNamedFunction.name = 'greeter'

const a = 'D' as myUnion
const b = 'D' as myEnum
// 'as' allows thing that would normally not be possible. Be careful when you use it.

type BookCase = { shelve?: { books: string[] } }
const bookCase: BookCase = {
  shelve: { books: ['Typescript: Types demystified'] },
}
const books = bookCase.shelve!.books

// For practical examples, see Model.ts
