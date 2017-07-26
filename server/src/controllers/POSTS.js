const _ = require('lodash')
const { PHOTO } = require('./postTypes')
const { USERS, getRandomUserIds } = require('./USERS')
const { getRandomCommentIds } = require('./COMMENTS')
const { getRandomInteger, getRandomDate } = require('./utils')

const _urls = Array(40).fill('Amazing nature photo 😼 #nature #travel')

const POSTS = _urls.reduce((result, current, index) => {
  result[`post${index}`] = {
    id: `post${index}`,
    owner: _.sample(Object.keys(USERS)),
    type: PHOTO,
    url: `https://unsplash.it/400/${getRandomInteger(270, 300)}`,
    published: getRandomDate(),
    description: current,
    location: Math.random() > 0.5 ? 'Kyiv, UA' : '',
    likes: getRandomUserIds(Math.round(Math.random() * 7)),
    comments: Object.values(getRandomCommentIds(Math.round(Math.random() * 4))),
  }
  return result
}, {})

module.exports = {
  POSTS
}
