const { USERS } = require('../../data/USERS')
const { COMMENTS } = require('../../data/COMMENTS')
const { POSTS } = require('../../data/POSTS')

const DELAY = 500
const delayOnDevServer = fn => (process.env.NODE_ENV === 'production')
  ? fn
  : (...args) => {
      setTimeout(() => fn(...args), DELAY)
    }

exports.homePage = (req, res) => {
  res.send(`  
Magrats API
===========

GET /posts/
GET /users/
GET /comments/
  `)
}

exports.getPosts = delayOnDevServer(
  (req, res) => res.json({ result: POSTS })
)

exports.patchPost = delayOnDevServer(
  (req, res) => {
    const postId = req.params.id

    if (postId && POSTS[postId]) {

      if (Object.keys(req.body).length > 0) {
        res.send({ result: `Post ${req.params.id} will be patched` })
      } else {
        res.send({ error: 'Nothing to patch' })
      }
    } else {
      res.send({ error: 'Post not found' })
    }
  }
)

exports.getUsers = delayOnDevServer(
  (req, res) => res.json({ result: USERS })
)

exports.getComments = delayOnDevServer(
  (req, res) => res.json({ result: COMMENTS })
)
