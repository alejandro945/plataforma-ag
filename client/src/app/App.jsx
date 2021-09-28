import React from 'react'
import AppContext from './contexts/AppContext'
import SettingsProvider from './contexts/SettingsContext'
import Theme from './components/Theme/Theme'
import history from '../history'
import { Router, Switch, Route } from 'react-router-dom'
import routes from './rootRoutes'
import CssBaseline from '@material-ui/core/CssBaseline';
import sessionRoutes from './views/sessions/SessionRoutes'
import Colaborator from './views/colaborators/form'
import Login from './views/sessions/Login'
import Vehicles from './views/vehicles'
import { Provider } from 'react-redux'
import { store } from './config/configStore'

const App = () => {
    return (
            <Provider store={store}>
                <Theme>
                    <Router history={history}>
                        <Route path="/session/colaborator">
                            <Colaborator />
                        </Route>
                        <Route path="/session/login">
                            <Login />
                        </Route>
                        <Route path="/session/vehicles">
                            <Vehicles />
                        </Route>
                    </Router>
                </Theme>
            </Provider>
    )
}

export default App
