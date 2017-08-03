const { USERS } = require('../data/USERS')
const { COMMENTS } = require('../data/COMMENTS')
const { POSTS } = require('../data/POSTS')

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

const fetchPosts = delayOnDevServer(
  () => ({ result: POSTS })
)

const patchPost = delayOnDevServer(
  (postId, patch) => {
    if (!(postId in POSTS)) return ({ error: 'Post not found' })

    if ('likes' in patch) { // Patch likes
      for (let [userId, value] of Object.entries(patch.likes)) {
        // console.warn('Set like status', postId, userId, value)
        const { likes } = POSTS[postId]
        if (value && (likes.indexOf(userId) === -1)) {
          likes.push(userId)
        } else if (!value && (likes.indexOf(userId) > -1)) {
          likes.splice(likes.indexOf(userId), 1)
        }
      }
    }

    return ({ result: POSTS[postId] })
  }
)

const fetchUsers = delayOnDevServer(
  () => ({ result: USERS })
)

const patchUser = delayOnDevServer(
  (userId, patch) => {
    console.warn('API call: patch user')

    if (!(userId in USERS)) return ({ error: 'User not found' })



    // if ('likes' in patch) { // Patch likes
    //   for (let [userId, value] of Object.entries(patch.likes)) {
    //     // console.warn('Set like status', postId, userId, value)
    //     const { likes } = POSTS[postId]
    //     if (value && (likes.indexOf(userId) === -1)) {
    //       likes.push(userId)
    //     } else if (!value && (likes.indexOf(userId) > -1)) {
    //       likes.splice(likes.indexOf(userId), 1)
    //     }
    //   }
    // }

    return ({ result: USERS[userId] })
  }
)

const fetchComments = delayOnDevServer(
  () => ({ result: COMMENTS })
)

export const API = {
  fetchPosts,
  patchPost,
  fetchUsers,
  patchUser,
  fetchComments,
}
