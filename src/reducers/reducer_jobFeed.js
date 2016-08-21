/**
 * reducer to get the latest job posts
 */
import {SET_JOBS} from '../actions'
import {SET_MORE_JOBS} from '../actions'

export default (state = [], action) => {
  switch(action.type) {
    case SET_JOBS:
      return action.payload

    case SET_MORE_JOBS:
      const newFeed = state.concat(action.payload)
      return newFeed

    default:
      return state
  }
  return state
}
