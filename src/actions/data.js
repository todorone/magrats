import { API } from '../api/api'

// ACTION TYPES
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const PATCH_POST_REQUEST = 'PATCH_POST_REQUEST'
export const PATCH_POST_SUCCESS = 'PATCH_POST_SUCCESS'

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const PATCH_USER_REQUEST = 'PATCH_USER_REQUEST'
export const PATCH_USER_SUCCESS = 'PATCH_USER_SUCCESS'

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST'
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'

// POSTS
const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST })
const fetchPostsSuccess = posts => ({ type: FETCH_POSTS_SUCCESS, posts })
export function fetchPosts () {
  return async dispatch => {
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
}

const patchPostRequest = () => ({ type: PATCH_POST_REQUEST })
const patchPostSuccess = post => ({ type: PATCH_POST_SUCCESS, post })
export function setLikeStatus (postId, userId, status) {
  return async dispatch => {
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
}

// USERS
const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST })
const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, users })
export function fetchUsers () {
  return async dispatch => {
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
}

const patchUserRequest = () => ({ type: PATCH_USER_REQUEST })
const patchUserSuccess = user => ({ type: PATCH_USER_SUCCESS, user })
export function setFollowStatus (followingId, followerId, status) {
  return async dispatch => {
    dispatch(patchUserRequest())

    try {
      const data = await API.patchUser(followingId, { followers: { [followerId]: status } })

      if (data.error) {
        dispatch(patchUserError(data.error))
      } else {
        dispatch(patchUserSuccess(data.result))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

// COMMENTS
const fetchCommentsRequest = () => ({ type: FETCH_COMMENTS_REQUEST })
const fetchCommentsSuccess = comments => ({ type: FETCH_COMMENTS_SUCCESS, comments })
export function fetchComments () {
  return async dispatch => {
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
}

// ERROR HANDLERS
function fetchDataError (error) {
  return dispatch => console.error('Fetch data error:', error)
}

function patchPostError (error) {
  return dispatch => console.error('Patch post error:', error)
}

function patchUserError (error) {
  return dispatch => console.error('Patch user error:', error)
}
