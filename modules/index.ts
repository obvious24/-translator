/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
