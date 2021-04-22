import { generatePath, useParams } from 'react-router-dom'
import { OpCo } from '../Model/Model'

const homeRoutePattern = '/'
const libraryRoutePattern = '/books'
const detailsRoutePattern = '/book/:bookId'
const referencesRoutePattern = '/references'
const opCoDetailsRoutePattern = '/opCo/:opCo'

export type PageRoute<
  TParams extends Record<string, string | undefined> = never
> = {
  pattern: string
  generatePath: (param: TParams) => string
  useParams: <TActual extends TParams = TParams>() => TActual
}

export const createPageRoute = <
  TParams extends Record<string, string | undefined> = {}
>(
  pattern: string
): Readonly<PageRoute<TParams>> => {
  return {
    pattern,
    generatePath: (params: TParams) => generatePath(pattern, params),
    useParams: <TActual extends TParams = TParams>() => useParams<TActual>(),
  }
}

export const homeRoute = createPageRoute(homeRoutePattern)
export const libraryRoute = createPageRoute(libraryRoutePattern)
export const detailsRoute = createPageRoute<{ bookId: string }>(
  detailsRoutePattern
)
export const referencesRoute = createPageRoute(referencesRoutePattern)
export const opCoDetailsRoute = createPageRoute<{ opCo: OpCo }>(
  opCoDetailsRoutePattern
)

export const pageRoutes = {
  homeRoute,
  libraryRoute,
  detailsRoute,
  referencesRoute,
  opCoDetailsRoute,
} as const
