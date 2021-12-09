import { saveCollaborator } from "../../../services"

export const GET_COLABORATORS = 'GET_VEHICLE'
export const CREATE_COLABORATOR = 'CREATE_COLABORATOR'
export const DELETE_COLABORATOR = 'DELETE_COLABORATOR'
export const EDIT_COLABORATOR = 'EDIT_COLABORATOR'

export const addColaborator = (colaborator) => async (dispatch) => {
    await saveCollaborator(colaborator).then((res) => {
          dispatch({
              type: 'CREATE_COLABORATOR',
              payload: res.data
          })
      })
  }