import React from 'react'
import { Card, Grid, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
    card_title: {
        fontSize: '1rem',
        textTransform: 'capitalize',
        fontWeight: '500',
    },
    card_subtitle: { 
        fontSize: '0.875rem', 
        color: 'var(--text-muted)' 
    },
})
const DefaultCard = ({ children, title, subtitle, icon }) => {
    const classes = useStyles()
    return (
        <Grid className="mx-2">
            <Card elevation={6} className="p-4 my-4">
                <div
                    className={clsx(
                        classes.card_title, 'mb-2', "row")
                    }
                >
                    {icon}
                    <div className="col-9 d-flex align-items-center">
                        {title}
                    </div>
                </div>
                {subtitle && <div className={clsx(
                    classes.card_subtitle, 'mb-2')
                }>{subtitle}</div>}
                {children}
            </Card>
        </Grid>
    )
}

export default DefaultCard
