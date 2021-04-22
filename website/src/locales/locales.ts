import { Book, OpCo } from '../Model/Model'

type BookLabelKey = keyof Omit<Book, 'id'>
type BookLabelLocaleKey = `${BookLabelKey}Label`

interface Locale {
  book: Record<BookLabelLocaleKey, string> & {
    switchLanguage: string
    alternatives: string
  }
}

export type Language = 'nl' | 'fr' | 'sv'

type Locales = Record<Language, Locale>

const fr: Locale = {
  book: {
    titleLabel: 'Titre',
    authorLabel: 'Auteur',
    contentLabel: 'Contenu',
    switchLanguage: 'Toon in Nederlands',
    alternatives: 'Alternatives',
  },
}

const nl: Locale = {
  book: {
    titleLabel: 'Titel',
    authorLabel: 'Auteur',
    contentLabel: 'Inhoud',
    switchLanguage: 'Afficher en français',
    alternatives: 'Alternatieven',
  },
}

const sv: Locale = {
  book: {
    titleLabel: 'Titel',
    authorLabel: 'Författare',
    contentLabel: 'Innehållet',
    switchLanguage: 'Visa på svenska',
    alternatives: 'Alternativ',
  },
}

export const locales: Locales = { nl, fr, sv }

const localesMap: Record<OpCo, Language[]> = {
  Noordhoff: ['nl'],
  Liber: ['sv'],
  Plantyn: ['nl', 'fr'],
}

export const getLocales = (opco: OpCo) => {
  return localesMap[opco]
}

export const getLabelFor = (key: keyof Book, language: Language) =>
  `${locales[language].book[`${key}Label` as BookLabelLocaleKey]}:`
