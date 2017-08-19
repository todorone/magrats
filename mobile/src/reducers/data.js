import * as types from '../actions/data'

const initialState = {
  posts: {},
  users: {},
  comments: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
      return { ...state, posts: { ...action.posts } }
    case types.PATCH_POST_SUCCESS: {
      return { ...state, posts: { ...state.posts, [action.post.id]: action.post } }
    }
    case types.FETCH_USERS_SUCCESS:
      return { ...state, users: { ...action.users } }
    case types.PATCH_USER_SUCCESS: {
      return { ...state, users: { ...state.users, [action.user.id]: action.user } }
    }
    case types.FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: { ...action.comments } }
    default:
      return state
  }
}
