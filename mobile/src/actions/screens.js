import { getMyUserId } from '../selectors/selectors'

// ACTION TYPES
export const SET_PROFILE_SCREEN_USER_ID = 'SET_PROFILE_SCREEN_USER_ID'

// SCREENS
export const setProfileScreenUserId = userId => ({ type: SET_PROFILE_SCREEN_USER_ID, userId })
export function setProfileScreenToMyself () {
  return (dispatch, getState) => {
    dispatch(setProfileScreenUserId(getMyUserId(getState())))
  }
}
