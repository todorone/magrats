import { getMyUserId } from '../selectors/selectors'
import * as types from './actionTypes'

// SCREENS
export const setProfileScreenUserId = userId => ({ type: types.SET_PROFILE_SCREEN_USER_ID, userId })
export const setProfileScreenToMyself = () =>
  (dispatch, getState) => {
    dispatch(setProfileScreenUserId(getMyUserId(getState())))
  }
