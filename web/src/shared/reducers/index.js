import { combineReducers } from 'redux'

import data from './data'
import user from './user'
import profileScreen from './profileScreen'

export default combineReducers({
  data, // data comes from API - posts, users, comments
  user, // app's user data
  profileScreen, // Profile screen state
})
