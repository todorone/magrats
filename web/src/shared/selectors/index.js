import { createSelector } from 'reselect'

// USERS
export const getUsers = state => state.data.users
export const getUserById = (userId, users) => users[userId]

// COMMENTS
export const getComments = state => state.data.comments
export const get2CommentsOfPost = (state, postId) =>
  getPostById(state, postId).comments.slice(0, 2).map(id => getComments(state)[id])
export const getCommentsByIds = (commentsIds, comments) =>
  commentsIds.map(commentId => comments[commentId])

// POSTS
export const getPosts = state => state.data.posts
export const getPostById = (state, postId) => getPosts(state)[postId]
export const getPostOwner = (state, postId) =>
  getUsers(state)[getPostById(state, postId).owner]
export const isPostLiked = (state, postId) =>
  getPostById(state, postId).likes.indexOf(getMyUserId(state)) > -1
export const getPostsArray = createSelector(
  getPosts,
  posts => Object.values(posts)
)

// USER
export const getMyUserId = state => state.user.userId

// SCREENS
const getProfileScreenUserId = state => state.profileScreen.userId
export const getProfileScreenUser = state => getUsers(state)[getProfileScreenUserId(state)]

export const getPostsForProfileScreen = createSelector(
  getPosts,
  getProfileScreenUser,
  (posts, user) => (user)
    ? user.posts.map(postId => posts[postId])
    : []
)
