const { USERS } = require('../../data/USERS')
const { COMMENTS } = require('../../data/COMMENTS')
const { POSTS } = require('../../data/POSTS')

const DELAY = 500
const delayOnDevServer = fn =>
  (...args) => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(fn(...args)),
        (process.env.NODE_ENV === 'production') ? 0 : DELAY
      )
    })
  }

export const fetchPosts = delayOnDevServer(
  () => ({ result: POSTS })
)

export const fetchUsers = delayOnDevServer(
  () => ({ result: USERS })
)

export const fetchComments = delayOnDevServer(
  () => ({ result: COMMENTS })
)

export const API = {
  fetchPosts,
  fetchUsers,
  fetchComments,
}
