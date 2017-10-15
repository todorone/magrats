// ACTION TYPES
const CHANGE_AUTH_STATE = 'CHANGE_AUTH_STATE'

const changeAuthState = user => ({ type: CHANGE_AUTH_STATE, user })
export function onChangeAuthState(user) {
  return dispatch => dispatch(changeAuthState(user))
}
