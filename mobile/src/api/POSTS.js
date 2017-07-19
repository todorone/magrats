import { PHOTO } from './postTypes'
import USERS, { getRandomUserIds } from './USERS'
import { getRandomCommentIds } from './COMMENTS'
import { getRandomInteger, getRandomDate } from '../utils'

const _urls = Array(7).fill('Amazing nature photo 😼 #nature #travel')

const POSTS = _urls.reduce((result, current, index) => {
  result[`post${index}`] = {
    id: `post${index}`,
    owner: `user${getRandomInteger(0, USERS.length)}`,
    type: PHOTO,
    url: `https://unsplash.it/400/300`,
    published: getRandomDate(),
    description: current,
    likes: getRandomUserIds(Math.round(Math.random() * 7)).reduce(
      (result, current) => {
        result[current] = getRandomDate()
        return result
      }, {}),
    comments: new Set(
      Object.values(getRandomCommentIds(Math.round(Math.random() * 4)))
    ),
  }
  return result
}, {})

export default POSTS
