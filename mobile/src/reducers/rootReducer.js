import { combineReducers } from 'redux'

import data from './data'
import user from './user'

export default combineReducers({
  data, // data comes from API - posts, users, comments
  user, // app's user data
})
