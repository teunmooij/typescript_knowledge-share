import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {
  const navLink = {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  }

  const navBorder = { borderRight: '1px solid #eeeeee' }

  return {
    menuBar: {
      backgroundColor: theme.palette.grey[400],
    },
    menuList: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
    },
    menuItem: {
      width: 120,
      ...navBorder,
    },
    opCoItem: {
      flexGrow: 1,
      ...navBorder,
    },
    referencesItem: {
      width: 200,
    },
    navLink,
    opCoLink: {
      ...navLink,
      padding: theme.spacing(0, 1),
      ...navBorder,
      '&:last-child': { borderRight: 'none' },
    },
    activeLink: {
      borderBottom: '3px solid blue',
    },
    linkText: {
      '& span': { fontWeight: 700, fontSize: '24px' },
    },
  }
})
