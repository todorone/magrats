import { createSelector } from 'reselect'

// POSTS
export const getPosts = state => state.data.posts
export const getPostsArray = createSelector(
  getPosts,
  posts => Object.values(posts)
)

// USERS
export const getUsers = state => state.data.users

// COMMENTS
export const getComments = state => state.data.comments

// HELPERS
export const getUserById = (userId, users) => users[userId]

export const getPostOwner = (post, users) => users[post.owner]

export const getCommentsByIds = (commentsIds, comments) => (
  commentsIds.map(commentId => comments[commentId])
)

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
