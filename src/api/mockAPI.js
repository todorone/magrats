const { USERS } = require('./data/USERS')
const { COMMENTS } = require('./data/COMMENTS')
const { POSTS } = require('./data/POSTS')

const DELAY = 500
const delayOnDevServer = fn => (...args) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(fn(...args)),
      process.env.NODE_ENV === 'production' ? 0 : DELAY,
    )
  })
}

const fetchPosts = delayOnDevServer(() => ({ result: POSTS }))

const patchPost = delayOnDevServer((postId, patch) => {
  if (!(postId in POSTS)) return { error: 'Post not found' }
  // Patch likes
  if ('likes' in patch) {
    for (let [userId, value] of Object.entries(patch.likes)) {
      const { likes } = POSTS[postId]
      if (value && likes.indexOf(userId) === -1) {
        likes.push(userId)
      } else if (!value && likes.indexOf(userId) > -1) {
        likes.splice(likes.indexOf(userId), 1)
      }
    }
  }

  return { result: POSTS[postId] }
})

const fetchUsers = delayOnDevServer(() => ({ result: USERS }))

const patchUser = delayOnDevServer((userId, patch) => {
  if (!(userId in USERS)) return { error: 'Following user is not found' }

  if ('followers' in patch) {
    for (let [followerId, value] of Object.entries(patch.followers)) {
      if (!(followerId in USERS)) return { error: 'Follower user is not found' }

      const { followers } = USERS[userId]
      const { following } = USERS[followerId]
      if (
        value &&
        followers.indexOf(followerId) === -1 &&
        following.indexOf(userId) === -1
      ) {
        followers.push(followerId)
        following.push(userId)
      } else if (
        !value &&
        followers.indexOf(followerId) > -1 &&
        following.indexOf(userId) > -1
      ) {
        followers.splice(followers.indexOf(followerId), 1)
        following.splice(following.indexOf(userId), 1)
      }
    }
  }

  return { result: USERS[userId] }
})

const fetchComments = delayOnDevServer(() => ({ result: COMMENTS }))

export const API = {
  fetchPosts,
  patchPost,
  fetchUsers,
  patchUser,
  fetchComments,
}
