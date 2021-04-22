import React from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { Code } from '@material-ui/icons'

export const Item: React.FC<{
  subtitle?: string
  icon?: React.ReactNode
  className?: string
}> = ({ children, subtitle, icon, className }) => (
  <ListItem className={className}>
    <ListItemIcon>{icon || <Code />}</ListItemIcon>
    <ListItemText
      primary={<Typography variant="h4">{children}</Typography>}
      secondary={subtitle}
    />
  </ListItem>
)
