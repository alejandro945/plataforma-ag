import { makeStyles, Avatar } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import React from 'react'
const useStyles = makeStyles({
    rounded: {
        color: '#fff',
        backgroundColor: red[900],
    }
})
const DefaultAvatar = ({name}) => {
    const classes = useStyles()
    return (
        <Avatar className={classes.rounded} variant="rounded">{name}</Avatar>
    )
}

export default DefaultAvatar
