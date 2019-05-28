import { actionTypes } from './actionTypes'
import { api } from '../api'

export const getAnimals = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_ANIMALS })
  try {
    const { data } = await api.fetchAnimals()
    dispatch(getAnimalsSuccess(data))
  } catch (err) {
    dispatch(getAnimalsFailure(err))
  }
}

export const getAnimalsSuccess = (payload) => (dispatch) => dispatch({
  type: actionTypes.GET_ANIMALS_SUCCESS,
  payload
})

export const getAnimalsFailure = (error) => (dispatch) => dispatch({
  type: actionTypes.GET_ANIMALS_FAILURE,
  payload: error
})