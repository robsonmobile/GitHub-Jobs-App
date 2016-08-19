export const GET_JOBS = 'GET_JOBS'

export function getJob(payload) {
  console.log('function called!!!')
  return {
    type: GET_JOBS,
    payload: payload
  }
}
