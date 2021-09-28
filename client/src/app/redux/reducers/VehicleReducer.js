import { GET_VEHICLE } from '../actions/VehicleActions'

const initialState = {
  array: []
}

const VehicleReducer = (state = initialState, action ) => {
  switch (action.type) {
    case GET_VEHICLE: {
      return { ...state, array: action.payload }
    }
    default: {
      return state
    }
  }
}

export default VehicleReducer
