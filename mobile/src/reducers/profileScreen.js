import { SET_PROFILE_SCREEN_USER_ID } from '../actions/screens'

const initialState = {
  userId: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_SCREEN_USER_ID:
      return { ...state, userId: action.userId }
    default:
      return state
  }
}
