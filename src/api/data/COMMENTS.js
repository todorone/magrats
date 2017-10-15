const _ = require('lodash')
const { USERS } = require('./USERS')
const { getRandomDate } = require('./utils')

const _comments = [
  'What an awesome post!',
  'Absolutely amazing',
  'Feel in love with what You wrote...',
  'Blissful!!!',
  '♥️♥️♥️',
  'Yay, cool...',
  'Great thoughts..',
  'What a brilliant picture!',
  'Very inspiring',
  'Want to be here 💌',
  'Great!!!',
  "And very-very-very long comment. This comment is soooo looooonnnnggggggg, that it is even longer then longest wait before sunrise. Come on, it's just a joke...(:",
]

const COMMENTS = _comments.reduce((result, current, index) => {
  result[`comment${index}`] = {
    id: `comment${index}`,
    owner: _.sample(Object.keys(USERS)),
    text: current,
    date: getRandomDate(),
  }
  return result
}, {})

const getRandomCommentIds = amount => {
  return Object.keys(COMMENTS)
    .sort(() => 0.5 - Math.random())
    .slice(0, amount)
}

module.exports = {
  COMMENTS,
  getRandomCommentIds,
}
