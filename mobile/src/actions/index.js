import { API } from '../api'
import * as types from './actionTypes'

// SCREENS
export const setProfileScreenUserId = userId => ({ type: types.SET_PROFILE_SCREEN_USER_ID, userId })
export const setProfileScreenToMyself = () =>
  (dispatch, getState) => {
    dispatch(setProfileScreenUserId(getState().user.userId))
  }

// POSTS
const fetchPostsRequest = () => ({ type: types.FETCH_POSTS_REQUEST })
const fetchPostsSuccess = posts => ({ type: types.FETCH_POSTS_SUCCESS, posts })
export const fetchPosts = () =>
  async dispatch => {
    dispatch(fetchPostsRequest())

    try {
      const data = await API.fetchPosts()

      if (data.error) {
        dispatch(fetchDataError(data.error))
      } else {
        dispatch(fetchPostsSuccess(data.result))
      }
    } catch (error) {
      console.error(error)
    }
  }

const patchPostRequest = () => ({ type: types.PATCH_POST_REQUEST })
const patchPostSuccess = post => ({ type: types.PATCH_POST_SUCCESS, post })
export const setLikeStatus = (postId, userId, status) =>
  async dispatch => {
    dispatch(patchPostRequest())

    try {
      const data = await API.patchPost(postId, { likes: { [userId]: status } })

      if (data.error) {
        dispatch(patchPostError(data.error))
      } else {
        dispatch(patchPostSuccess(data.result))
      }
    } catch (error) {
      console.error(error)
    }
  }
// USERS
const fetchUsersRequest = () => ({ type: types.FETCH_USERS_REQUEST })
const fetchUsersSuccess = users => ({ type: types.FETCH_USERS_SUCCESS, users })
export const fetchUsers = () =>
  async dispatch => {
    dispatch(fetchUsersRequest())

    try {
      const data = await API.fetchUsers()

      if (data.error) {
        dispatch(fetchDataError(data.error))
      } else {
        dispatch(fetchUsersSuccess(data.result))
      }
    } catch (error) {
      console.error(error)
    }
  }

// COMMENTS
const fetchCommentsRequest = () => ({ type: types.FETCH_COMMENTS_REQUEST })
const fetchCommentsSuccess = comments => ({ type: types.FETCH_COMMENTS_SUCCESS, comments })
export const fetchComments = () =>
  async dispatch => {
    dispatch(fetchCommentsRequest())

    try {
      const data = await API.fetchComments()

      if (data.error) {
        dispatch(fetchDataError(data.error))
      } else {
        dispatch(fetchCommentsSuccess(data.result))
      }
    } catch (error) {
      console.error(error)
    }
  }

// ERROR HANDLERS
const fetchDataError = error =>
  dispatch => {
    console.error('Fetch data error:', error)
  }
const patchPostError = error =>
  dispatch => {
    console.error('Patch post error:', error)
  }
