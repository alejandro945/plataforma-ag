import { getVehicles } from '../../../services'

export const GET_VEHICLE = 'GET_VEHICLE'
export const CREATE_VEHICLE = 'CREATE_VEHICLE'
export const DELETE_VEHICLE = 'DELETE_VEHICLE'
export const EDIT_VEHICLE = 'EDIT_VEHICLE'

export const getVehicle = () => async (dispatch) => {
  await getVehicles().then((res) => {
        dispatch({
            type: 'GET_VEHICLE',
            payload: res.data
        })
    })
}

