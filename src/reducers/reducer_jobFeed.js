/**
 * reducer to get the latest job posts
 */
import {GET_JOBS} from '../actions'

export default (state = {}, action) => {
  switch(action.type) {
    case GET_JOBS:
      return action.payload

    default:
      return state
  }
  return state
}
