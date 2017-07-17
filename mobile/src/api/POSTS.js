import { PHOTO } from './postTypes'
import { getRandomUserIds } from './USERS'
import { getRandomCommentIds } from './COMMENTS'
import { getRandomInteger } from '../utils'
import USERS from './USERS'

const _urls = Array(7).fill('Amazing nature photo 😼 #nature #travel')

const randomDate = () => Date.now() - Math.round(1000000 * Math.random())

const POSTS = _urls.reduce((result, current, index) => {
  result[`post${index}`] = {
    id: `post${index}`,
    owner: `user${getRandomInteger(0, USERS.length)}`,
    type: PHOTO,
    url: `https://unsplash.it/400/300`,
    published: randomDate(),
    description: current,
    likes: getRandomUserIds(Math.round(Math.random() * 7)).reduce(
      (result, current) => {
        result[current] = randomDate()
        return result
      }, {}),
    comments: getRandomCommentIds(Math.round(Math.random() * 4)).reduce(
      (result, current) => {
        result[current] = randomDate()
        return result
      }, {}),
  }
  return result
}, {})

export default POSTS
