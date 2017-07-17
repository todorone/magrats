const USERS = {}

for (let i = 0; i < 10; i++) {
  USERS[`user${i}`] = {
    id: `user${i}`,
    name: `User ${i}`,
  }
}

USERS.length = Object.keys(USERS).length

export const getRandomUserIds = (amount) => {
  return Object.keys(USERS)
    .sort(() => 0.5 - Math.random())
    .slice(0, amount)
}

export default USERS
