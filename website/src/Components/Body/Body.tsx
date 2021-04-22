import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './Body.styles'

export const Body: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <main className={classes.body}>
        <Container>
          <>{children}</>
        </Container>
      </main>
      <Box className={classes.disclaimer}>
        <Typography variant="subtitle2">
          Disclaimer: This is a Typescript knowledge share. The GraphQL and
          React examples are not necessarily the best solutions for the
          functionalities shown.
        </Typography>
      </Box>
    </>
  )
}
