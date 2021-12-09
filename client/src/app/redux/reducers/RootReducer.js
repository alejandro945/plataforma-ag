//import {ThemeOptions} from './ThemeOptions'
import VehicleReducer  from './VehicleReducer'
import ColaboratorReducer  from './ColaboratorReducer'
import {combineReducers}  from 'redux'

const RootReducer = combineReducers({
  vehicles: VehicleReducer,
  colaborators: ColaboratorReducer
})

export default RootReducer;