import * as types from '../actions/actionTypes'

const initialState = {
  userId: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PROFILE_SCREEN_USER_ID:
      return { ...state, userId: action.userId }
    default:
      return state
  }
}
