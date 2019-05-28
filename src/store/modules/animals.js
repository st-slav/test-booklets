import { combineReducers } from 'redux'
import { actionTypes } from '../../actions/actionTypes'

const listReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ANIMALS_SUCCESS:
      return action.payload

    default:
      return state
  }
}

const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.GET_ANIMALS:
      return true

    case actionTypes.GET_ANIMALS_SUCCESS:
    case actionTypes.GET_ANIMALS_FAILURE:
      return false

    default:
      return state
  }
}

const errorInitialState = null

const errorReducer = (state = errorInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ANIMALS_FAILURE:
      return action.payload

    case actionTypes.GET_ANIMALS_START:
      return errorInitialState

    default:
      return state
  }
}

export const animals = combineReducers({
  list: listReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
})

const getState = (state) => state.animals
export const isLoading = (state) => getState(state).isLoading
export const getAnimals = (state) => getState(state).list
export const getErrorMessage = (state) => {
  const { error } = getState(state)
  return error && error.message ? error.message : null
} 