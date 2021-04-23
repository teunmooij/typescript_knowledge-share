import React from 'react'
import { Avatar, Link, List, Typography } from '@material-ui/core'
import { Item } from '../../Components/ListItem/ListItem'
import { useStyles } from './References.styles'

export const References = () => {
  const classes = useStyles()
  return (
    <>
      <List dense className={classes.margin}>
        <Item>
          Typescript documentation:{' '}
          <Link
            href="https://www.typescriptlang.org/docs/handbook/intro.html"
            target="blank"
          >
            https://www.typescriptlang.org
          </Link>
        </Item>
        <Item icon={<Avatar alt="Teun" src="teun.png" />}>
          Any questions? Any (reasonable) time...{' '}
          <Typography variant="h4" className={classes.me}>
            @Teun
          </Typography>{' '}
          on slack
        </Item>
        <Item subtitle="See Examples folder. There you'll also find references to examples elsewhere in the repository.">
          You can find the examples shown in the knowledge share in the
          repository.
        </Item>
        <Item
          className={classes.margin}
          icon={<Avatar alt="Federico" src="federico.jpg" />}
        >
          <Typography variant="h4" className={classes.link}>
            @federico ++
          </Typography>{' '}
          for your help and your patience.
        </Item>
      </List>
    </>
  )
}
