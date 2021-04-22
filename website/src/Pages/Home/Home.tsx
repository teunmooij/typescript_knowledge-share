import React from 'react'
import { Box, List, Typography } from '@material-ui/core'
import { useStyles } from './Home.styles'
import { Item } from '../../Components/ListItem/ListItem'

export const Home = (): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.inner}>
        <Typography variant="h3" className={classes.header}>
          Typescript: Types demystified
        </Typography>
      </Box>
      <Box className={classes.inner}>
        <List dense>
          <Item>What is Typescript?</Item>
          <Item
            subtitle={
              'configuration, migration, building and debugging, using javascript libs'
            }
          >
            How to migrate from Javascript to Typescript
          </Item>
          <Item subtitle="types, interfaces, primitives, functions, enums, unions, any, unknown, ...">
            Basic type system
          </Item>
          <Item>Classes</Item>
          <Item subtitle="basic generics, type constraints, keyof, never">
            Generics
          </Item>
          <Item subtitle="🌟here the fun starts🌟">Utility types</Item>
          <Item>Function overloading</Item>
          <Item subtitle=" type guards, conditional types, type inference, (im)mutability">
            More fun with advanced type manipulation
          </Item>
          <Item subtitle="!, !! vs Boolean, typeof / instanceof, as, this / this param">
            Pitfalls
          </Item>
        </List>
      </Box>
    </>
  )
}
