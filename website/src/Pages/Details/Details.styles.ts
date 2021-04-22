import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  outer: {
    paddingTop: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
    height: 2,
  },
  languageToggle: {
    position: 'absolute',
    right: 0,
  },
}))
