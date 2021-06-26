import { createAction } from '@reduxjs/toolkit';

export const updateDataRequest = createAction('monitoring/updateDataRequest');
export const updateDataSuccess = createAction('monitoring/updateDataSuccess');
export const updateDataError = createAction('monitoring/updateDataError');

export const changeFilterRequest = createAction('monitoring/changeFilterRequest');
export const changeFilterSuccess = createAction('monitoring/changeFilterSuccess');
export const changeFilterError = createAction('monitoring/changeFilterError');
