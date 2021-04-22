import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { Box } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { useParams } from 'react-router'

import { Query } from '../../Model/Model'
import { detailsQuery } from './Details.qry'
import { Details as BookDetails } from './Details'
import { getLocales } from '../../locales/locales'

export const Details = (): JSX.Element => {
  const { bookId } = useParams<{ bookId?: string }>()
  const { data } = useQuery<Pick<Query, 'book'>, { bookId: string }>(
    detailsQuery,
    {
      variables: { bookId: bookId! },
      skip: !bookId,
    }
  )

  const availableLanguages = useMemo(
    () => (data?.book ? getLocales(data.book.author) : []),
    [data?.book]
  )

  if (!data) {
    return <Skeleton width="100%" height={300} />
  }

  if (!data.book) {
    return <Box>No book found with the specified ID</Box>
  }

  return <BookDetails book={data.book} languages={availableLanguages} />
}
