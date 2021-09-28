import { createStore, applyMiddleware } from 'redux'
import RootReducer from '../redux/reducers/RootReducer'
import thunk from 'redux-thunk';

const initialState = {}

export const store = createStore(
    RootReducer,
    initialState,
    applyMiddleware(thunk)
)