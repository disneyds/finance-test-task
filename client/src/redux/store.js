import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import monitoringReducer from './exchange-monitoring/reducers';

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer: {
    monitoring: monitoringReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

export default store