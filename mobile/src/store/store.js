import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../shared/reducers'

export default createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
))
