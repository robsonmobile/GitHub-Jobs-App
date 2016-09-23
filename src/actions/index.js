export const SET_JOBS = 'SET_JOBS'
export const SET_MORE_JOBS = 'SET_MORE_JOBS'
export const SAVE_JOB = 'SAVE_JOB'
export const DELETE_JOB = 'DELETE_JOB'

export function setJobFeed(payload) {
  return {
    type: SET_JOBS,
    payload: payload
  }
}

export function setMoreJobFeed(payload) {
  return {
    type: SET_MORE_JOBS,
    payload: payload
  }
}

export function saveJob(payload) {
  return {
    type: SAVE_JOB,
    payload: payload
  }
}

export function deleteJob(payload) {
  return {
    type: DELETE_JOB,
    payload: payload
  }
}
