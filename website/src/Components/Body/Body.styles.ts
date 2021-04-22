import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  body: {
    padding: theme.spacing(2),
  },
  disclaimer: {
    position: 'absolute',
    paddingLeft: theme.spacing(2),
    top: 'calc(100vh - 50px)',
  },
  avatar: {
    display: 'inline-block',
    height: 24,
    width: 24
  }
}))
