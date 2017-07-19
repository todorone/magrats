const { USERS } = require('./USERS')
const { COMMENTS } = require('./COMMENTS')
const { POSTS } = require('./POSTS')

const DELAY = 500

exports.homePage = (req, res) => {
  res.send('Magrats API')
}

exports.getPosts = (req, res) => {
  setTimeout(() => res.json(POSTS), DELAY)
}

exports.getUsers = (req, res) => {
  setTimeout(() => res.json(USERS), DELAY)
}

exports.getComments = (req, res) => {
  setTimeout(() => res.json(COMMENTS), DELAY)
}
