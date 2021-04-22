import React, { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from '@material-ui/core'
import { Book, hasCover, isPlantynBook } from '../../Model/Model'
import { getLabelFor, Language, locales } from '../../locales/locales'
import { useStyles } from './Details.styles'
import { BookSelector } from './BookSelector'

export const BookContent = ({ content }: { content: string }) => (
  <Box>{content}</Box>
)

interface DetailsProps {
  book: Book
  languages: Language[]
}

export const Details = ({ book, languages }: DetailsProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('nl')
  const classes = useStyles()

  useEffect(() => {
    if (!languages.includes(currentLanguage)) {
      setCurrentLanguage(languages.length ? languages[0] : 'nl')
    }
  }, [languages, currentLanguage, setCurrentLanguage])

  const showAlternativeContent = languages.indexOf(currentLanguage) === 1

  return (
    <>
      <Grid container spacing={2} className={classes.outer}>
        {isPlantynBook(book) && (
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={showAlternativeContent}
                  onChange={() =>
                    setCurrentLanguage(
                      languages[showAlternativeContent ? 0 : 1]
                    )
                  }
                />
              }
              label={locales[currentLanguage].book.switchLanguage}
              className={classes.languageToggle}
            />
          </Grid>
        )}
        <Grid container item xs={5} spacing={3}>
          <Grid item xs={4}>
            <Typography>{getLabelFor('title', currentLanguage)}</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>{book.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>{getLabelFor('author', currentLanguage)}</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>{book.author}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <Container>
            {hasCover(book) && <img src={book.imageSrc} alt={book.title} />}
          </Container>
        </Grid>
        <Grid item xs={2}>
          <Typography>{getLabelFor('content', currentLanguage)}</Typography>
        </Grid>
        <Grid item xs={8}>
          {isPlantynBook(book) && showAlternativeContent ? (
            <BookContent content={book.alternativeContent} />
          ) : (
            !!book.content && <BookContent content={book.content} />
          )}
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography>{locales[currentLanguage].book.alternatives}</Typography>
        </Grid>
        <Grid item xs={8}>
          <BookSelector opCo={book.author} />
        </Grid>
      </Grid>
    </>
  )
}
