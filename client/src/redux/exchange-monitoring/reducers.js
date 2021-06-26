import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  updateDataRequest,
  updateDataSuccess,
  updateDataError,
  changeFilterRequest,
  changeFilterSuccess,
  changeFilterError,
} from './actions';

const initialState = {
  monitoring: {
    tickers: [],
    filter: 'ticker',
    list:[],
    loading: false,
    error: null,
  },
};

const tickers = createReducer(initialState.monitoring.tickers, {
  [updateDataSuccess]: (_, { payload }) => payload,
});

const filter = createReducer(initialState.monitoring.filter, {
  [changeFilterSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(initialState.monitoring.loading, {
  [updateDataRequest]: () => true,
  [updateDataSuccess]: () => false,
  [updateDataError]: () => false,
  [changeFilterRequest]: () => true,
  [changeFilterSuccess]: () => false,
  [changeFilterError]: () => false,
});

const error = createReducer(initialState.monitoring.error, {
  [updateDataError]: (_, { payload }) => payload,
  [changeFilterError]: (_, { payload }) => payload,
});

export default combineReducers({
  tickers,
  filter,
  loading,
  error,
});