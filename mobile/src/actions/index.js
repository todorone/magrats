import API from '../api'
import * as types from './actionTypes'

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

// FETCH DATA ERROR HANDLER
const fetchDataError = error =>
  dispatch => {
    console.error(error)
  }
