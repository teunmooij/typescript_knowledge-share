/* eslint-disable @typescript-eslint/no-unused-vars */

// Basic generics
export type sn = string | number

const getKeyValuePair = (
  key: string,
  value: sn
): { key: string; value: sn } => ({ key, value })

const pair = getKeyValuePair('myKey', 5)
// const double = pair.value * 2

const getKeyValuePairGeneric = <T>(
  key: string,
  value: T
): { key: string; value: T } => ({ key, value })

const pair2 = getKeyValuePairGeneric('myKey', 5)
const double = pair2.value * 2

// With Constraint
const toObject = <T extends string | number>(key: T, value: sn) => ({
  [key]: value,
})
// Constraint is required, because not all types are valid keys

// Keyof

type TextBook = {
  id: string
  title: string
}

type Keys = keyof TextBook
// Equivalent to type Keys = 'id'|'title'

// For practical examples, see route.ts / 'useState' in Details.tsx
