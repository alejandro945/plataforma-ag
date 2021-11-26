import React from 'react'
import Theme from './components/Theme/Theme'
import history from '../history'
import { Route, BrowserRouter,Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './config/configStore'
import AppContext from './contexts/AppContext'
import routes from './rootRoutes'
import sessionRoutes from './views/sessions/SessionRoutes'
import Suspense from './components/Suspend/Suspend'

const App = () => {
    return (
        <AppContext.Provider value={{routes}}>
            <Provider store={store}>
                <Theme>
                    <BrowserRouter>
                        <Switch>
                            {/* AUTHENTICATION PAGES (SIGNIN, SIGNUP ETC.) */}
                            {sessionRoutes.map((item, i) => (                          
                                <Route
                                    key={i}
                                    path={item.path}
                                    component={item.component}
                                />
                            ))}
                        </Switch>
                    </BrowserRouter>
                </Theme>
            </Provider>
        </AppContext.Provider>
    )
}

export default App
