import React from 'react'
import { matchPath, NavLink } from 'react-router-dom'
import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core'
import {
  detailsRoute,
  opCoDetailsRoute,
  homeRoute,
  libraryRoute,
  referencesRoute,
} from '../../Utils/routes'
import { useStyles } from './Header.styles'
import { OpCo } from '../../Model/Model'

export const Header = () => {
  const classes = useStyles()

  const OpCoLink = ({ opCo }: { opCo: OpCo }) => (
    <NavLink
      className={classes.opCoLink}
      to={opCoDetailsRoute.generatePath({ opCo })}
      activeClassName={classes.activeLink}
      isActive={(_, location) =>
        !!matchPath(location.pathname, { path: detailsRoute.pattern })
      }
    >
      <ListItemText
        className={classes.linkText}
        primary={opCo.substring(0, 1)}
      />
    </NavLink>
  )
  return (
    <AppBar position="sticky" className={classes.menuBar}>
      <Toolbar>
        <List component="nav" className={classes.menuList}>
          <ListItem className={classes.menuItem}>
            <NavLink
              className={classes.navLink}
              to={homeRoute.generatePath({})}
              exact
              activeClassName={classes.activeLink}
            >
              <ListItemText className={classes.linkText} primary="Home" />
            </NavLink>
          </ListItem>
          <ListItem className={classes.menuItem}>
            <NavLink
              className={classes.navLink}
              to={libraryRoute.generatePath({})}
              activeClassName={classes.activeLink}
            >
              <ListItemText className={classes.linkText} primary="Library" />
            </NavLink>
          </ListItem>
          <ListItem className={classes.opCoItem}>
            <OpCoLink opCo="Noordhoff" />
            <OpCoLink opCo="Liber" />
            <OpCoLink opCo="Plantyn" />
          </ListItem>
          <ListItem className={classes.referencesItem}>
            <NavLink
              className={classes.navLink}
              to={referencesRoute.generatePath({})}
              activeClassName={classes.activeLink}
            >
              <ListItemText className={classes.linkText} primary="References" />
            </NavLink>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  )
}
