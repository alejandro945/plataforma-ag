import React from 'react'
import Theme from './components/Theme/Theme'
import history from '../history'
import { Router, Route } from 'react-router-dom'
import Colaborator from './views/colaborators/form/Colaborator'
import Login from './views/sessions/Login'
import Vehicles from './views/vehicles/Vehicles'
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
