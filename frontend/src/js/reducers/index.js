import { combineReducers } from 'redux';
import { dimensionsReducer } from './utils';

export const rootReducer = combineReducers({
  dimensions: dimensionsReducer,
});
