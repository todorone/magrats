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
      dispatch(fetchPostsSuccess(data))
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
      dispatch(fetchUsersSuccess(data))
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
      dispatch(fetchCommentsSuccess(data))
    } catch (error) {
      console.error(error)
    }
  }
