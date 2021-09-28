import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

export default function Poper({ message, children }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const defaultMessage = `Servicio Particular
    A1: Motocicletas de cilindraje menor de 125 cc.
    A2: Motocicletas de cilindraje mayor de 125 cc.
    B1: Cuatrimotos, motocarros, autos, camperos, camionetas y microbuses.
    B2: Buses, busetas y camiones rígidos.
    B3: Tracto camiones y vehículos articulados.
    Servicio Especial
    C1: Autos, camperos, camionetas y microbuses.
    C2: Buses, busetas y camiones rígidos.
    C3: Vehículos articulados.`;
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className="ms-2">
            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {children}
            </Typography>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{!message ? defaultMessage : message}
                </Typography>
            </Popover>
        </div>
    );
}
