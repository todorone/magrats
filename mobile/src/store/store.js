import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'

const composeEnhancers = composeWithDevTools({ realtime: true })

export default createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware),
))
