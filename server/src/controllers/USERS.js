const _ = require('lodash')
const userIds = require('./data/userIds')
const userDescriptions = require('./data/userDescriptions')
const userAvatars = require('./data/userAvatars')

const USERS = {}

for (let i = 0; i < 50; i++) {
  USERS[userIds[i]] = {
    id: userIds[i],
    description: userDescriptions[i],
    thumbUrl: _.sample(userAvatars),
    following: [],
  }
}

const getRandomUserIds = (amount) => _.sampleSize(Object.keys(USERS), amount)

module.exports = {
  USERS,
  getRandomUserIds,
}
