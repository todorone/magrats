
// DATA
export const getPosts = state => state.data.posts

export const getUsers = state => state.data.users

export const getComments = state => state.data.comments

// HELPERS
export const getPostOwner = (post, users) => users[post.owner]

export const getCommentsByIds = (commentsIds, comments) => (
  commentsIds.map(commentId => comments[commentId])
)
