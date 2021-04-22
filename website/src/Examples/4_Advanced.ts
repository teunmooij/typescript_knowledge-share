/* eslint-disable @typescript-eslint/no-unused-vars */

// function overloading
function sum(v1: number): (v2: number) => number
function sum(v1: number, v2: number): number
function sum(v1: number, v2?: number): number | ((v2: number) => number) {
  if (typeof v2 === 'number') return v1 + v2
  return (v: number) => v1 + v
}

const result = sum(1, 2)
const adder = sum(2)

// type guard
type Pred<TIn> = (val: TIn) => boolean
type Guard<TIn, TGuard extends TIn> = (val: TIn) => val is TGuard

// Template types
type Id = `${string}_id`

// Conditional types
type IdFactory<T extends string | Id | number> = (
  val: T
) => T extends number ? string : T

const getNumberId: IdFactory<number> = (val: number) => val.toString()
const getStringId: IdFactory<Id> = (val: Id) => val

const id = getStringId('abc_id')
const id2 = getNumberId(1)

// Infer
type Then<T> = T extends PromiseLike<infer U> ? U : T

// Readonly
type Book = {
  id: string
  title: string
}

type ImmutableBook = {
  readonly id: string
  readonly title: string
}

export type Mutable<T> = { -readonly [P in keyof T]: T[P] }
export type Immutable<T> = { readonly [P in keyof T]: T[P] }

// Try changing the type of this const to ImmutableBook, Mutable<ImmutableBook> or Immutable<Book> and see what happens
const book: Book = {
  id: 'abc',
  title: 'Hello Javascript',
}

book.title = 'Hello Typescript!'

// See Model.ts for examples of type guards. Try changing the return type to boolean and see what happens when you try to build
// See 'pageRoutes' in routes.ts for another why to create a readonly object.
