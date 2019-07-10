import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { mapReducer } from './map.redux';

const rootReducer = combineReducers({
  mapReducer,
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
