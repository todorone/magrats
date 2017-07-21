const { USERS } = require('./USERS')
const { COMMENTS } = require('./COMMENTS')
const { POSTS } = require('./POSTS')

const DELAY = 500
const delayOnDevServer = fn => (process.env.NODE_ENV === 'production')
  ? fn
  : (...args) => {
      setTimeout(() => fn(...args), DELAY)
    }

exports.homePage = (req, res) => {
  res.send('Magrats API')
}

exports.getPosts = delayOnDevServer(
  (req, res) => res.json({ result: POSTS })
)

exports.updatePost = delayOnDevServer(
  (req, res) => res.send({ error: 'Not implemented' })
)

exports.getUsers = delayOnDevServer(
  (req, res) => res.json({ result: USERS })
)

exports.getComments = delayOnDevServer(
  (req, res) => res.json({ result: COMMENTS })
)
