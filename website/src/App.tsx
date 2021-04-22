import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Body, Header } from './Components'
import { Library } from './Pages/Library/Library'
import { Home } from './Pages/Home/Home'
import { pageRoutes } from './Utils/routes'
import { CssBaseline } from '@material-ui/core'
import { Details } from './Pages/Details/Details.gql'
import { References } from './Pages/References/References'
import { BookSelector } from './Pages/Details/BookSelector'

export const App = () => {
  return (
    <CssBaseline>
      <HashRouter>
        <Header />
        <Body>
          <Switch>
            <Route path={pageRoutes.libraryRoute.pattern} component={Library} />
            <Route path={pageRoutes.detailsRoute.pattern} component={Details} />
            <Route
              path={pageRoutes.opCoDetailsRoute.pattern}
              component={BookSelector}
            />
            <Route
              path={pageRoutes.referencesRoute.pattern}
              component={References}
            />
            <Route path={pageRoutes.homeRoute.pattern} component={Home} />
          </Switch>
        </Body>
      </HashRouter>
    </CssBaseline>
  )
}
