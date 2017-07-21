const _ = require('lodash')
const { getRandomInteger } = require('./utils')
const userIds = require('./data/userIds')
const userDescriptions = require('./data/userDescriptions')

const USERS = {}

for (let i = 0; i < 50; i++) {
  USERS[userIds[i]] = {
    id: userIds[i],
    description: userDescriptions[i],
    thumbUrl: `https://0.s3.envato.com/files/97977535/128/${getRandomInteger(1, 15)}_resize.png`,
    following: [],
  }
}

const getRandomUserIds = (amount) => {
  return _.sampleSize(Object.keys(USERS), amount)
}

module.exports = {
  USERS,
  getRandomUserIds,
}
