import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { applicantReducer } from './applicant';
import { skillReducer } from './skill';

/**
 * Bootstraps the redux state container for the application.
 *
 * @return {object} the redux state container.
 */
function bootstrapRedux() {
  const logger = createLogger({ predicate: () => typeof __DEV__ !== 'undefined' && __DEV__ });
  const reducer = combineReducers({
    applicant: applicantReducer,
    skill: skillReducer,
  });

  return createStore(reducer, undefined, applyMiddleware(thunk, logger));
}

export { bootstrapRedux };
