import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../shared/reducers/rootReducer'

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
)
