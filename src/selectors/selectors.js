import { createSelector } from 'reselect'
import memoize from 'lodash/memoize'

// USERS
export const getUsers = state => state.data.users
export const getUserById = (state, userId) => getUsers(state)[userId]

export const getUsersByIds = (state, userIds) =>
  getUsersArray(state).filter(user => userIds.indexOf(user.id) > -1)

export const isMeFollowingUser = (user, myUserId) => user.followers.indexOf(myUserId) > -1

export const getUsersArray = createSelector(getUsers, users => Object.values(users))

// COMMENTS
export const getComments = state => state.data.comments

export const getCommentsOfPost = (state, postId) =>
  getPostById(state, postId).comments.map(id => getComments(state)[id])

export const getLastCommentsOfPost = (state, postId) =>
  getPostById(state, postId)
    .comments.slice(0, 2)
    .map(id => getComments(state)[id])

export const getCommentsByIds = (commentsIds, comments) =>
  commentsIds.map(commentId => comments[commentId])

// POSTS
export const getPosts = state => state.data.posts

export const getPostById = (state, postId) => getPosts(state)[postId]

export const getPostOwner = (state, postId) =>
  getUsers(state)[getPostById(state, postId).owner]

export const isPostLiked = (state, postId) =>
  getPostById(state, postId).likes.indexOf(getMyUserId(state)) > -1

export const getPostsArray = createSelector(getPosts, posts => Object.values(posts))

export const getUsersWhoLikesPost = (state, postId) =>
  getUsersByIds(state, getPostById(state, postId).likes)

export const getPostsOfUser = memoize((posts, user) =>
  user.posts.map(postId => posts[postId]),
)

// USER
export const getMyUserId = state => state.user.userId
