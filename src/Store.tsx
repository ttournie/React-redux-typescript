import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers/';
import { IState } from './utils/models/initialState';

/**
 * Array of middleware;
 */
const middleware = [thunk, createLogger()];

const hasWindow = (typeof window === 'object');

/**
 * Boilerplate for selecting which compose: redux-devtools or redux
 */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  hasWindow &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

/**
 *  Applied middleware package with devToolsExtension if available in browser
 *  @param {Function} f incoming function for middleware chain
 *  @returns {Function} middleware
 */
const middlewarePackage = composeEnhancers(
  applyMiddleware(...middleware),
);

/**
 * Generator function that mixes all the reducers with the initial state,
 * enabling all middleware
 *  @returns {Store} Completed redux store
 */
const store = (initialState: IState) => (createStore(
  reducers,
  initialState,
  middlewarePackage,
));

export default store;