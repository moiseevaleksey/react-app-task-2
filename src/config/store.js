import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import callInProgress from 'reducers/app';
import user from 'reducers/user';

export const combinedReducer = combineReducers({
  callInProgress,
  user,
});

const store = createStore(combinedReducer, applyMiddleware(thunk));

export default store;
