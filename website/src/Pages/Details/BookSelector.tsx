import { useQuery } from '@apollo/client'
import { MenuItem, Select } from '@material-ui/core'
import React, { useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { OpCo, Query } from '../../Model/Model'
import { detailsRoute } from '../../Utils/routes'
import { booksQuery } from './Details.qry'

export const BookSelector = ({ opCo }: { opCo?: OpCo }) => {
  const { bookId, opCo: routeOpCo } = useParams<{
    bookId?: string
    opCo?: string
  }>()
  const history = useHistory()

  const { data } = useQuery<Pick<Query, 'books'>>(booksQuery, {
    variables: { author: routeOpCo || opCo },
  })

  useEffect(() => {
    if (data?.books.length && routeOpCo) {
      const bookId = data.books[0].id
      const to = detailsRoute.generatePath({ bookId })
      history.push(to)
    }
  }, [data?.books, history, routeOpCo])

  const handleChange = useCallback(
    (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const value = e.target.value
      if (typeof value === 'string' && value !== bookId) {
        const to = detailsRoute.generatePath({
          bookId: value,
        })
        history.push(to)
      }
    },
    [bookId, history]
  )

  return (
    <Select onChange={handleChange} disableUnderline value={bookId}>
      {data?.books.map((book) => (
        <MenuItem value={book.id} key={book.id}>
          {book.title}
        </MenuItem>
      ))}
    </Select>
  )
}
