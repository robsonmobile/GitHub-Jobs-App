/**
 * combination of all the reducers
 * to create single application store
 * blessings of 'redux' :-)
 */

import { combineReducers } from 'redux'

import appState from './reducer_appState'
import jobFeed from './reducer_jobFeed'

export default rootReducer = combineReducers({
  appState,
  jobFeed
})
