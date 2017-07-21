const { PHOTO } = require('./postTypes')
const { USERS, getRandomUserIds } = require('./USERS')
const { getRandomCommentIds } = require('./COMMENTS')
const { getRandomInteger, getRandomDate } = require('./utils')

const _urls = Array(10).fill('Amazing nature photo 😼 #nature #travel')

const POSTS = _urls.reduce((result, current, index) => {
  result[`post${index}`] = {
    id: `post${index}`,
    owner: `user${getRandomInteger(0, Object.keys(USERS).length - 1)}`,
    type: PHOTO,
    url: `https://unsplash.it/400/${getRandomInteger(270, 300)}`,
    published: getRandomDate(),
    description: current,
    likes: getRandomUserIds(Math.round(Math.random() * 7)),
    comments: Object.values(getRandomCommentIds(Math.round(Math.random() * 4))),
  }
  return result
}, {})

module.exports = {
  POSTS
}
