import COMMENTS from './COMMENTS'
import USERS from './USERS'
import POSTS from './POSTS'

export const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ posts: POSTS }), 500)
  })
}

export const fetchUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ users: USERS }), 250)
  })
}

export const fetchComments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ comments: COMMENTS }), 250)
  })
}
