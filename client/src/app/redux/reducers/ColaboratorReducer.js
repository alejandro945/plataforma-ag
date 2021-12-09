import { CREATE_COLABORATOR } from '../actions/ColaboratorActions'

const initialState = {
  array: []
}

const ColaboratorReducer = (state = initialState, action ) => {
  switch (action.type) {
    case CREATE_COLABORATOR: {
      return { ...state, array: action.payload }
    }
    default: {
      return state
    }
  }
}

export default ColaboratorReducer
