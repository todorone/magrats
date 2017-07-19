const { getRandomInteger } = require('./utils')

const USERS = {}

for (let i = 0; i < 10; i++) {
  USERS[`user${i}`] = {
    id: `user${i}`,
    name: `User ${i}`,
    description: 'Hi there!',
    thumbUrl: `https://0.s3.envato.com/files/97977535/128/${getRandomInteger(1, 15)}_resize.png`,
  }
}

const getRandomUserIds = (amount) => {
  return Object.keys(USERS)
    .sort(() => 0.5 - Math.random())
    .slice(0, amount)
}

module.exports = {
  USERS,
  getRandomUserIds,
}
