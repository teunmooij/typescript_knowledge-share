import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  inner: {
    display: 'flex',
    margin: '0 auto',
    paddingTop: theme.spacing(2),
  },
  header: {
    margin: '0 auto',
    display: 'inline-block',
  },
}))
