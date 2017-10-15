const _ = require('lodash')
const userIds = require('./USER_IDS')
const userDescriptions = require('./USER_DESCRIPTIONS')
const userAvatars = require('./USER_AVATARS')

const USERS = {}

for (let i = 0; i < 11; i++) {
  USERS[userIds[i]] = {
    id: userIds[i],
    description: userDescriptions[i],
    thumbUrl: _.sample(userAvatars),
    homePage: 'http://www.starwars.com/',
    following: [],
    followers: [],
    posts: [],
  }
}
// Fill up with following & followers
Object.keys(USERS).forEach((userId, index, userIds) => {
  const followers = _.sampleSize(userIds, _.random(0, 10)).filter(
    followerId => followerId !== userId, // Checking not to be follower of oneself
  )
  USERS[userId].followers = followers

  followers.forEach(followerId => {
    USERS[followerId].following.push(userId)
  })
})

const getRandomUserIds = amount => _.sampleSize(Object.keys(USERS), amount)

module.exports = {
  USERS,
  getRandomUserIds,
}
