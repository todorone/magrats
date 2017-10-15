const _ = require('lodash')
const { LOCATIONS } = require('./LOCATIONS')
const { PHOTO } = require('./POST_TYPES')
const { USERS, getRandomUserIds } = require('./USERS')
const { getRandomCommentIds } = require('./COMMENTS')
const { getRandomDate } = require('./utils')

const _urls = Array(40).fill('Amazing nature photo 😼 #nature #travel')

const POSTS = _urls.reduce((result, current, index) => {
  result[`post${index}`] = {
    id: `post${index}`,
    owner: _.sample(Object.keys(USERS).slice(0, 5)),
    type: PHOTO,
    url: `https://unsplash.it/400/${_.random(270, 300)}`,
    published: getRandomDate(),
    description: current,
    location: LOCATIONS[_.random(0, LOCATIONS.length - 1)],
    likes: getRandomUserIds(_.random(0, 6)),
    comments: Object.values(getRandomCommentIds(_.random(0, 4))),
  }
  return result
}, {})

Object.values(POSTS).forEach(post => {
  USERS[post.owner].posts.push(post.id)
})

module.exports = {
  POSTS,
}
