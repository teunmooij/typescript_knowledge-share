import React from 'react'
import { useQuery } from '@apollo/client'
import { List, ListItem, ListItemText } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { libraryQuery } from './Library.qry'
import { detailsRoute } from '../../Utils/routes'
import { Link } from 'react-router-dom'
import { Query } from '../../Model/Model'

export const Library = () => {
  const { data } = useQuery<Pick<Query, 'books'>>(libraryQuery)

  if (!data) {
    return <Skeleton width="100%" height={300} />
  }

  return (
    <List>
      {data.books.map((book: any) => (
        <ListItem
          key={book.id}
          component={Link}
          to={detailsRoute.generatePath({ bookId: book.id })}
        >
          <ListItemText primary={book.title} secondary={book.author} />
        </ListItem>
      ))}
    </List>
  )
}
