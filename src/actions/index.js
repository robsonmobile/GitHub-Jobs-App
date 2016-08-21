export const SET_JOBS = 'SET_JOBS'
export const SET_MORE_JOBS = 'SET_MORE_JOBS'

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
