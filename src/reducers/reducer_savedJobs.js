/**
 * reducer to save and delete jobs
 */
import {SAVE_JOB} from '../actions'
import {DELETE_JOB} from '../actions'

export default (state = [], action) => {
  switch(action.type) {
    case SAVE_JOB:
      console.log('action dispatched!')
      return state
      
    default:
      return state
  }
  return state
}
