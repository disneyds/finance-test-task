import {
  updateDataRequest,
  updateDataSuccess,
  updateDataError,
  changeFilterRequest,
  changeFilterSuccess,
  changeFilterError,
} from './actions';

export const updateData = data => async dispatch => {
    dispatch(updateDataRequest())
    try {
        dispatch(updateDataSuccess(data))
    } catch (error) {
        dispatch(updateDataError(error))
    }
}

export const changeFilter = field => async dispatch => {
    dispatch(changeFilterRequest())
    try {
        dispatch(changeFilterSuccess(field))
    } catch (error) {
        dispatch(changeFilterError(error))
    }
}