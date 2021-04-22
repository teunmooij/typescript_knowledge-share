declare module 'foobar-ipsum' {
  interface FoobarOptions {
    size?: {
      sentence?: number
      paragraph?: number
    }
  }

  class IpsumGenerator {
    constructor(options?: FoobarOptions)
    word: () => string
    sentence: (size?: number) => string
    paragraph: (size?: number, eoc?: string) => string
  }

  export default IpsumGenerator
}
