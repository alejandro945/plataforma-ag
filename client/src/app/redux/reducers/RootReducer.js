//import {ThemeOptions} from './ThemeOptions'
import VehicleReducer  from './VehicleReducer'
import {combineReducers}  from 'redux'

const RootReducer = combineReducers({
  vehicles: VehicleReducer
})

export default RootReducer;