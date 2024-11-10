import { createStore, combineReducers } from 'redux';
import movieReducer from './reducers/movieReducer';
import favoritesReducer from './reducers/favoritesReducer';

const rootReducer = combineReducers({
  movieReducer,
  favoritesReducer
});

export const myStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);