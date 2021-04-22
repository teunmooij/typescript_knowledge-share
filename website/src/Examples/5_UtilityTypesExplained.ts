/* eslint-disable @typescript-eslint/no-unused-vars */

/*
* Utility types are not language feature, but simply types that have already been defined.
* Here's how you would create them yourself
*/

type OpCo = 'Noordhoff' | 'Liber' | 'Plantyn'

export type TextBook = {
  id: string
  title: string
  author: OpCo
  content?: string
}

// Records
type _Record<TKeys extends string | number | symbol, TValue> = {
  [Key in TKeys]: TValue
}

type Settings = _Record<string, string>
type BestSellers = _Record<OpCo, TextBook>

// Pick some props
type _Extract<TUnion, TParts> = TUnion extends TParts ? TUnion : never
type _Exclude<TUnion, TParts> = TUnion extends TParts ? never : TUnion

type _Pick<TType, TKeys extends keyof TType> = { [Key in TKeys]: TType[Key] }
type _Omit<TType, TKeys extends keyof TType> = {
  [Key in Exclude<keyof TType, TKeys>]: TType[Key]
}

// Change some types
type _NonNullable<T> = T extends null | undefined ? never : T

// Change some props
type _Partial<T> = { [K in keyof T]?: T[K] | undefined }
type _Required<T> = { [K in keyof T]-?: _NonNullable<T[K]> }

// Extract props from functions
type _Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never
type _ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer P
  ? P
  : never

// Still not had enough? https://www.typescriptlang.org/docs/handbook/intro.html