import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple, red } from '@material-ui/core/colors';
import React from 'react'

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
          main: purple[500],
        },
        secondary: {
          main: red[900],
        },
    }
});

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme